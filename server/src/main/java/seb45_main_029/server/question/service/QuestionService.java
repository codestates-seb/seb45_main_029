package seb45_main_029.server.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import seb45_main_029.server.question.entity.Question;
import seb45_main_029.server.question.repository.QuestionRepository;
import seb45_main_029.server.exception.BusinessLogicException;
import seb45_main_029.server.exception.ExceptionCode;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.user.service.UserService;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class QuestionService {

    private final UserService userService;
    private final QuestionRepository questionRepository;

    public Question post(Question question) {

        User loginUser = userService.getLoginUser();

        question.setUser(loginUser);
        question.setNickname(loginUser.getNickname());

        return questionRepository.save(question);
    }

    public Question update(Question question) {
        long loginUserId = userService.getLoginUser().getUserId();

        Question findQuestion = findQuestion(question.getQuestionId());

        if (findQuestion.getUser().getUserId() == loginUserId) {

            Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));
            Optional.ofNullable(question.getContent()).ifPresent(content -> findQuestion.setContent(content));
            Optional.ofNullable(question.getModifiedAt()).ifPresent(localDateTime -> findQuestion.setModifiedAt(LocalDateTime.now()));

            return questionRepository.save(findQuestion);

        } else throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_USER);
    }

    public Page<Question> getAllQuestions(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("questionId").descending());
        return questionRepository.findAll(pageRequest);
    }
    public Page<Question> getNotResolvedQuestions(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("questionId").descending());
        return questionRepository.findByStatusIsFalse(pageRequest);
    }
    public Page<Question> getResolvedQuestions(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("questionId").descending());
        return questionRepository.findByStatusIsTrue(pageRequest);
    }

    public Question getQuestion(long questionId) {
        Question findQuestion = findQuestion(questionId);

        findQuestion.setViewCount(findQuestion.getViewCount() + 1);

        questionRepository.save(findQuestion);

        return findQuestion;
    }

    public void deletePost(long questionId) {
        long loginUserId = userService.getLoginUser().getUserId();

        Question findQuestion = findQuestion(questionId);

        if (findQuestion.getUser().getUserId() == loginUserId) {

            findQuestion.setDeleted(true);
            questionRepository.save(findQuestion);

        } else throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_USER);
    }

    public Question findQuestion(long questionId) {
        return questionRepository.findByQuestionId(questionId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
    }
}
