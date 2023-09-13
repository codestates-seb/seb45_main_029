package seb45_main_029.server.user.service;


import lombok.AllArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb45_main_029.server.exception.BusinessLogicException;
import seb45_main_029.server.exception.ExceptionCode;
import seb45_main_029.server.security.auth.utils.AuthUserUtils;
import seb45_main_029.server.security.auth.utils.CustomAuthorityUtils;
import seb45_main_029.server.security.help.UserRegistrationApplicationEvent;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.user.repository.UserRepository;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Transactional
@AllArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    // 내부에서 발생하는 사건을 다른 곳에 알릴 수 있음
    private final ApplicationEventPublisher publisher;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;



    /*private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;*/

    // 회원 가입에 대한 메서드//
    public User createUser(User user, String confirmPassword) {

        verifyExistsUser(user.getEmail());

        //회원가입시 입력한 비밀번호가 서로 동일한지 확인
        if(!user.getPassword().equals(confirmPassword)){
            throw new BusinessLogicException(ExceptionCode.PASSWORD_NOT_MATCH);//예외처리
        }
        //현재시간 받아오기
        LocalDateTime currentTime = LocalDateTime.now();

        // Password 단방향 암호화
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        //현재시간
        user.setCreatedAt(currentTime);

        // DB에 등록하는 User 의 Role 정보를 생성하고 저장
        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

        User savedUser = userRepository.save(user);

        publisher.publishEvent(new UserRegistrationApplicationEvent(savedUser));
        return savedUser;
    }



    // 회원 정보 수정에 대한 메서드
    public User updateUser(User user) {
        // 사용자 인증 확인
        User loginUser = getLoginUser();
        User getUser = getVerifiedUser(user.getUserId());

        // 로그인 User의 아이디와 회원정보를 가진 user의 아이디가 다르면 예외 던지기
        if (!loginUser.getUserId().equals(getUser.getUserId())) {
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_USER); // 예외 처리
        }

        // 변경된 필드 업데이트
        if (user.getPassword() != null) {
            getUser.setPassword(user.getPassword());
        }
        if (user.getNickname() != null) {
            getUser.setNickname(user.getNickname());
        }
        if (user.getMotto() != null) {
            getUser.setMotto(user.getMotto());
        }
        if (user.getPainArea() != null) {
            getUser.setPainArea(user.getPainArea());
        }
        /*if (user.getImage() != null) {
            getUser.setImage(user.getImage());
        }*/
        if (user.getJob() != null) {
            getUser.setJob(user.getJob());
        }

        // 수정 시간 업데이트
        getUser.setModifiedAt(LocalDateTime.now());

        // 사용자 정보 저장
        return userRepository.save(getUser);
    }


    // user 사용자 정보 가지고 오기
    public User getUser(Long userId) {
        User user = getVerifiedUser(userId);

        /*List<Question> questions = getUserQuestionByUserId(userId);
        List<Question> userQuestionList = new ArrayList<>();

        for (Question question : questions) {
            Question userQuestion = new Question();
            userQuestion.setQuestionId(question.getQuestionId());
            userQuestion.setTitle(question.getTitle());
            userQuestion.setContent(question.getContent());
            userQuestion.setCreatedAt(question.getCreatedAt());
            userQuestionList.add(userQuestion);
        }

        List<Answer> answers = getUserAnswerByUserId(userId);
        List<Answer> userAnswerList = new ArrayList<>();

        for(Answer answer : answers) {
            Answer userAnswer = new Answer();
            userAnswer.setAnswerId(answer.getAnswerId());
            userAnswer.setContent(answer.getContent());
            userAnswer.setCreatedAt(answer.getCreatedAt());
            userAnswerList.add(userAnswer);
        }

        user.setQuestions(userQuestionList);
        user.setAnswers(userAnswerList);
*/
        return user;
    }

    /*private List<Question> getUserQuestionByUserId(Long userId) {
        return questionRepository.findAllByUserId(userId);
    }

    private List<Answer> getUserAnswerByUserId(Long userId) {
        return answerRepository.findAllByUserId(userId);
    }*/



    public void deleteUser(Long userId) {
        User getUser = getVerifiedUser(userId);

        // 로그인 User의 아이디와 회원정보를 가진 user의 아이디가 다르면 예외 던지기
        if(!getLoginUser().getUserId().equals(getUser.getUserId()))
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_USER);   // 🚨 예외처리

        userRepository.delete(getUser);
    }

    //로그아웃
    public void logout(HttpServletRequest request) {
        // HttpServletRequest를 사용하여 로그아웃 처리
        SecurityContextLogoutHandler logoutHandler = new SecurityContextLogoutHandler();
        logoutHandler.logout(request, null, SecurityContextHolder.getContext().getAuthentication());
    }


    // 있는 user인지 확인하기 -> 없으면 예외 던지기("없는 회원 입니다.")
    // 🔔 Question & Comment 쓸 때 로그인 안 되어 있으면 해당 메서드 사용 해야 함
    private User getVerifiedUser(Long userId) {

        Optional<User> user = userRepository.findById(userId);

        User getUser =
                user.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        // 🚨 예외 처리
        return getUser;
    }

    // 중복 가입인지 확인 -> 있으면 예외 던지기 ("이미 있는 회원 입니다.")
    private void verifyExistsUser(String email) {

        Optional<User> user = userRepository.findByEmail(email);

        if(user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
        // 🚨 예외 처리
    }

    // 로그인한 User를 가지고 오는 메서드
    public User getLoginUser() {
        return userRepository.findByEmail(AuthUserUtils.getAuthUser().getName())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND)); // 🚨 예외처리
    }
}
