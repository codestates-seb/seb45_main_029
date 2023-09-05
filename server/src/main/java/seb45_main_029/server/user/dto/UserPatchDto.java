package seb45_main_029.server.user.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
public class UserPatchDto {

    private Long userId;

    @NotBlank(message = "비밀번호는 필수값입니다.")
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,20}$",
            message = "비밀번호는 8자리 이상 숫자, 문자, 특수문자 조합으로 입력해야 합니다.")
    private String password;

    @NotBlank(message = "닉네임은 필수값입니다.")
    private String nickname;

    @NotBlank(message = "좌우명은 필수값입니다.")
    private String motto;

    @NotBlank(message = "건강상태는 필수값입니다.")
    private String status;

    @NotBlank(message = "직업은 필수입니다.")
    private String job;

    private String image;// 이미지??
}
