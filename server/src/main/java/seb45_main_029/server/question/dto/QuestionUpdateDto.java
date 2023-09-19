package seb45_main_029.server.question.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionUpdateDto {
    private long questionId;
    private String title;
    private String content;
}
