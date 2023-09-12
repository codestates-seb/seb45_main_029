package seb45_main_029.server.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@Setter
@Getter
public class QuestionResponseDtoWithoutAnswers {
    private long questionId;
    private long userId;
    private String nickname;
    private String title;
    private String content;
    private int likeCount;
    private int viewCount;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}

