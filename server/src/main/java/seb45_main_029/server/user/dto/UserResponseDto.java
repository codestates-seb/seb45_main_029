package seb45_main_029.server.user.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import seb45_main_029.server.user.entity.UserAnswerInfo;
import seb45_main_029.server.user.entity.UserQuestionInfo;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class UserResponseDto {
    private Long userId;

    private String email;

    private String password;

    private String username;

    private String nickname;

    private String motto;

    private String status;

    private String job;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime modifiedAt;









    private List<UserQuestionInfo> questions;

    private List<UserAnswerInfo> answers;


}
