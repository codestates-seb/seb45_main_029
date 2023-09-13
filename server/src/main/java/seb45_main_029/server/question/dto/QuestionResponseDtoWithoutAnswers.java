package seb45_main_029.server.question.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@Setter
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class QuestionResponseDtoWithoutAnswers {
    private long questionId;
    private long userId;
    private String nickname;
    private String title;
    private String content;
    private int likeCount;
    private int viewCount;
    private boolean status;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}

