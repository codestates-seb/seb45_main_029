package seb45_main_029.server.user.controller;


import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb45_main_029.server.user.dto.UserPatchDto;
import seb45_main_029.server.user.dto.UserPostDto;
import seb45_main_029.server.user.dto.UserResponseDto;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.user.mapper.UserMapper;
import seb45_main_029.server.user.service.UserService;
import seb45_main_029.server.user.uri.UriCreator;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;


//back에 올려야함
@RestController
@RequestMapping("/users")
@Validated
@Slf4j
@AllArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;



    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto) {
        User user = mapper.userPostDtoToUser(userPostDto);

        try {
            User createdUser = userService.createUser(user, userPostDto.getConfirmPassword());

            URI location = UriCreator.createUri("/users/signup", createdUser.getUserId());
            ResponseEntity<UserPostDto> response = ResponseEntity.created(location).body(userPostDto);

            return new ResponseEntity(response, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            // 비밀번호 확인 예외 처리
            return ResponseEntity.badRequest().body("비밀번호와 확인 비밀번호가 일치하지 않습니다.");
        }
    }

    //로그아웃

    @PostMapping("/logout")
    public ResponseEntity logout(HttpServletRequest request){
        userService.logout(request);
        return ResponseEntity.ok("로그아웃 되었습니다.");
    }



    //회원정보수정
    @PatchMapping("/mypage/edit/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") @Positive Long userId,
                                    @Valid @RequestBody UserPatchDto userPatchDto) {

        userPatchDto.setUserId(userId);

        User user = userService.updateUser(mapper.userPatchDtoToUser(userPatchDto));
        UserResponseDto response = mapper.userToUserResponseDto(user);



        return  ResponseEntity.ok(response);
    }

    //회원 마이페이지
    @GetMapping("/mypage/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") @Positive Long userId) {

        User user = userService.getUser(userId);
        UserResponseDto response = mapper.userToUserResponseDto(user);

        return ResponseEntity.ok(response);
    }
    //회원삭제
    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") @Positive Long userId) {

        userService.deleteUser(userId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);

    }
}
