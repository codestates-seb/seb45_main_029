package seb45_main_029.server.user.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;
import seb45_main_029.server.answer.dto.AnswerResponseDto;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.common.Job;
import seb45_main_029.server.common.PainArea;
import seb45_main_029.server.question.dto.QuestionResponseDtoWithoutAnswers;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
//@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserResponseDto {
    private Long userId;

    private String email;

    private String password;

    private String username;

    private String nickname;

    private String motto;

    private PainArea painArea;

    private Job job;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    private int point;

    private List<QuestionResponseDtoWithoutAnswers> questions;

    private List<AnswerResponseDto> answers;


}
