package seb45_main_029.server.user.dto;

import lombok.Getter;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.common.Job;
import seb45_main_029.server.common.PainArea;
import seb45_main_029.server.user.entity.UserAnswerInfo;
import seb45_main_029.server.user.entity.UserQuestionInfo;

import java.util.List;

@Getter
@Setter
public class UserResponseDto extends Auditable {
    private Long userId;

    private String email;

    private String password;

    private String username;

    private String nickname;

    private String motto;

    private PainArea painArea;

    private Job job;

    /*@CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime modifiedAt;*/









    private List<UserQuestionInfo> questions;

    private List<UserAnswerInfo> answers;


}
