package seb45_main_029.server.security.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserLoginResponseDto {
    private long userId;
    private String email;
    private String accessToken;

    public UserLoginResponseDto(long userId, String email, String accessToken) {
        this.userId = userId;
        this.email = email;
        this.accessToken = accessToken;
    }
}
