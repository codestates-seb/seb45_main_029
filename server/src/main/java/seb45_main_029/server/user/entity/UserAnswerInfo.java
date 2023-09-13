package seb45_main_029.server.user.entity;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class UserAnswerInfo {

    private Long answerId;

    private String content;

    private LocalDateTime createdAt;

}
