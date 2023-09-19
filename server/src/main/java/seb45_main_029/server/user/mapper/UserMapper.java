package seb45_main_029.server.user.mapper;


import org.mapstruct.Mapper;
import seb45_main_029.server.answer.dto.AnswerResponseDto;
import seb45_main_029.server.answer.entity.Answer;
import seb45_main_029.server.question.dto.QuestionResponseDtoWithoutAnswers;
import seb45_main_029.server.question.entity.Question;
import seb45_main_029.server.user.dto.UserPatchDto;
import seb45_main_029.server.user.dto.UserPostDto;
import seb45_main_029.server.user.dto.UserResponseDto;
import seb45_main_029.server.user.entity.User;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User userPostDtoToUser(@Valid UserPostDto userPostDto);

    User userPatchDtoToUser(@Valid UserPatchDto userPatchDto);

    default UserResponseDto userToUserResponseDto(User user) {
        if (user == null) {
            return null;
        }

        UserResponseDto userResponseDto = new UserResponseDto();

        userResponseDto.setCreatedAt(user.getCreatedAt());
        userResponseDto.setModifiedAt(user.getModifiedAt());
        userResponseDto.setUserId(user.getUserId());
        userResponseDto.setEmail(user.getEmail());
        userResponseDto.setPassword(user.getPassword());
        userResponseDto.setUsername(user.getUsername());
        userResponseDto.setNickname(user.getNickname());
        userResponseDto.setMotto(user.getMotto());
        userResponseDto.setPainArea(user.getPainArea());
        userResponseDto.setJob(user.getJob());
        userResponseDto.setPoint(user.getPoint().getPoint());
        userResponseDto.setQuestions(userQuestionListToUserQuestionResponseDtoList(user.getQuestion()));
        userResponseDto.setAnswers(userAnswerListToUserAnswerResponseDtoList(user.getAnswers()));

        return userResponseDto;
    }
    default QuestionResponseDtoWithoutAnswers userQuestionToUserQuestionResponseDto(Question question) {
        if (question == null) {
            return null;
        }

        QuestionResponseDtoWithoutAnswers questionResponseDto = new QuestionResponseDtoWithoutAnswers();

        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setUserId(question.getUser().getUserId());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setCreatedAt(question.getCreatedAt());

        return questionResponseDto;
    }
    default List<QuestionResponseDtoWithoutAnswers> userQuestionListToUserQuestionResponseDtoList(List<Question> list) {
        if (list == null) {
            return null;
        }

        List<QuestionResponseDtoWithoutAnswers> list1 = new ArrayList<>(list.size());
        for (Question question : list) {
            list1.add(userQuestionToUserQuestionResponseDto(question));
        }

        return list1;
    }

    default AnswerResponseDto userAnswerToUserAnswerResponseDto(Answer answer) {
        if (answer == null) {
            return null;
        }

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setQuestionId(answer.getQuestion().getQuestionId());
        answerResponseDto.setUserId(answer.getUser().getUserId());
        answerResponseDto.setNickname(answer.getQuestion().getNickname());
        answerResponseDto.setContent(answer.getContent());
        answerResponseDto.setCreatedAt(answer.getCreatedAt());
        answerResponseDto.setModifiedAt(answer.getModifiedAt());

        return answerResponseDto;
    }

    default List<AnswerResponseDto> userAnswerListToUserAnswerResponseDtoList(List<Answer> list) {
        if (list == null) {
            return null;
        }

        List<AnswerResponseDto> list1 = new ArrayList<AnswerResponseDto>(list.size());
        for (Answer answer : list) {
            list1.add(userAnswerToUserAnswerResponseDto(answer));
        }

        return list1;
    }
}
