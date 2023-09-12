package seb45_main_029.server.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import seb45_main_029.server.question.entity.Question;
import seb45_main_029.server.question.repository.QuestionRepository;
import seb45_main_029.server.question.service.QuestionService;
import seb45_main_029.server.answer.entity.Answer;
import seb45_main_029.server.answer.repository.AnswerRepository;
import seb45_main_029.server.exception.BusinessLogicException;
import seb45_main_029.server.exception.ExceptionCode;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.user.service.UserService;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;
    private final UserService userService;
    private final QuestionService questionService;

    public Answer post(Answer answer, long questionId) {

        User loginUser = userService.getLoginUser();
        long loginUserId = loginUser.getUserId();

        Question question = questionService.findQuestion(questionId);

        answer.setUserId(loginUserId);
        answer.setNickname(loginUser.getNickname());
        answer.setQuestion(question);
        question.getAnswers().add(answer);

        questionRepository.save(question);

        return answerRepository.save(answer);
    }

    public Answer update(Answer answer) {

        long loginUserId = userService.getLoginUser().getUserId();
        Answer findAnswer = findAnswer(answer.getAnswerId());

        if (findAnswer.getUserId() == loginUserId) {

            Optional.ofNullable(answer.getContent()).ifPresent(content -> findAnswer.setContent(content));
            Optional.ofNullable(answer.getModifiedAt()).ifPresent(localDateTime -> findAnswer.setModifiedAt(LocalDateTime.now()));

            return answerRepository.save(findAnswer);
        } else throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_USER);
    }

    public Page<Answer> getAnswers(int page, int size, long boardId) {

        return answerRepository.findByQuestionQuestionId(PageRequest.of(page, size), boardId);
    }

    public void deleteAnswer(long questionId) {

        long loginUserId = userService.getLoginUser().getUserId();
        Answer findAnswer = findAnswer(questionId);

        if (findAnswer.getUserId() == loginUserId) {
            answerRepository.delete(findAnswer);
        } else throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_USER);
    }

    public Answer findAnswer(long questionId) {
        return answerRepository.findById(questionId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }
}
