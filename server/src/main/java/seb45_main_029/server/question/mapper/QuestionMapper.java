package seb45_main_029.server.question.mapper;

import org.mapstruct.Mapper;
import seb45_main_029.server.question.dto.QuestionPostDto;
import seb45_main_029.server.question.dto.QuestionResponseDtoWithAnswers;
import seb45_main_029.server.question.dto.QuestionResponseDtoWithoutAnswers;
import seb45_main_029.server.question.dto.QuestionUpdateDto;
import seb45_main_029.server.question.entity.Question;
import seb45_main_029.server.answer.dto.AnswerResponseDto;
import seb45_main_029.server.answer.entity.Answer;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);

    Question questionUpdateDtoToQuestion(QuestionUpdateDto questionUpdateDto);

    default QuestionResponseDtoWithAnswers questionToQuestionResponseDto(Question question) {
        if (question == null) {
            return null;
        }

        QuestionResponseDtoWithAnswers questionResponseDto = new QuestionResponseDtoWithAnswers();

        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setUserId(question.getUser().getUserId());
        questionResponseDto.setNickname(question.getNickname());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setContent(question.getContent());
        questionResponseDto.setLikeCount(question.getLikeCount());
        questionResponseDto.setViewCount(question.getViewCount());
        questionResponseDto.setAnswers(answerListToAnswerResponseDtoList(question.getAnswers()));
        questionResponseDto.setStatus(question.isStatus());
        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setModifiedAt(question.getModifiedAt());

        return questionResponseDto;
    }

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
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

    default List<AnswerResponseDto> answerListToAnswerResponseDtoList(List<Answer> list) {
        if (list == null) {
            return null;
        }

        List<AnswerResponseDto> list1 = new ArrayList<AnswerResponseDto>(list.size());
        for (Answer answer : list) {
            list1.add(answerToAnswerResponseDto(answer));
        }

        return list1;
    }

    default List<QuestionResponseDtoWithoutAnswers> questionToQuestionResponseDtos(List<Question> questions){
        if ( questions == null ) {
            return null;
        }

        List<QuestionResponseDtoWithoutAnswers> list = new ArrayList<QuestionResponseDtoWithoutAnswers>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponseDtoWithoutAnswers( question ) );
        }

        return list;
    }

    default QuestionResponseDtoWithoutAnswers questionToQuestionResponseDtoWithoutAnswers(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDtoWithoutAnswers questionResponseDtoWithoutAnswers = new QuestionResponseDtoWithoutAnswers();

        questionResponseDtoWithoutAnswers.setQuestionId( question.getQuestionId() );
        questionResponseDtoWithoutAnswers.setUserId(question.getUser().getUserId());
        questionResponseDtoWithoutAnswers.setNickname( question.getNickname() );
        questionResponseDtoWithoutAnswers.setTitle( question.getTitle() );
        questionResponseDtoWithoutAnswers.setContent( question.getContent() );
        questionResponseDtoWithoutAnswers.setLikeCount( question.getLikeCount() );
        questionResponseDtoWithoutAnswers.setViewCount( question.getViewCount() );
        questionResponseDtoWithoutAnswers.setStatus( question.isStatus() );
        questionResponseDtoWithoutAnswers.setCreatedAt( question.getCreatedAt() );
        questionResponseDtoWithoutAnswers.setModifiedAt( question.getModifiedAt() );

        return questionResponseDtoWithoutAnswers;
    }
}


