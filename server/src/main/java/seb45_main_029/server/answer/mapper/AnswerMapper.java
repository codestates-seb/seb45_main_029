package seb45_main_029.server.answer.mapper;

import org.mapstruct.Mapper;
import seb45_main_029.server.answer.dto.AnswerPostDto;
import seb45_main_029.server.answer.dto.AnswerResponseDto;
import seb45_main_029.server.answer.dto.AnswerUpdateDto;
import seb45_main_029.server.answer.entity.Answer;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);

    Answer answerUpdateDtoToAnswer(AnswerUpdateDto commentUpdateDto);

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer) {

        if (answer == null) {
            return null;
        }

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setUserId(answer.getUserId());
        answerResponseDto.setNickname(answer.getNickname());
        answerResponseDto.setContent(answer.getContent());
        answerResponseDto.setQuestionId(answer.getQuestion().getQuestionId());
        answerResponseDto.setLikeCount(answer.getLikeCount());
        answerResponseDto.setCreatedAt(answer.getCreatedAt());
        answerResponseDto.setModifiedAt(answer.getModifiedAt());

        return answerResponseDto;
    }
    List<AnswerResponseDto> answerToAnswerResponseDtos(List<Answer> answers);
}

