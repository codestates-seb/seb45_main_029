package seb45_main_029.server.security.auth.dto;

import lombok.Getter;
import lombok.Setter;

/*
 * 로그인 시 필요한 데이터
 */
@Getter
@Setter
public class UserLoginDto {

    private String email;

    private String password;
}
