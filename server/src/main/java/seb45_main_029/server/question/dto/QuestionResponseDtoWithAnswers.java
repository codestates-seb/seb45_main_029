package seb45_main_029.server.question.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.answer.dto.AnswerResponseDto;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class QuestionResponseDtoWithAnswers {
    private long questionId;
    private long userId;
    private String nickname;
    private String title;
    private String content;
    private int likeCount;
    private int viewCount;
    private boolean status;
    private List<AnswerResponseDto> answers;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
