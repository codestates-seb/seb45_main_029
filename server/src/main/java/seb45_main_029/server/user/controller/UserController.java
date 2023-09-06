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
    public ResponseEntity postUser(@Valid
                                   @RequestBody UserPostDto userPostDto) {

        User user = mapper.userPostDtoToUser(userPostDto);
        User createdUser = userService.createUser(user);

        URI location = UriCreator.createUri("/users/signup", user.getUserId());
        // ex) http://localhost:8080/signup/{user-id}

        ResponseEntity response = ResponseEntity.created(location).build();

//        return new ResponseEntity(response, HttpStatus.CREATED) ;
        return ResponseEntity.created(location).build();
    }

    //회원정보수정
    @PatchMapping("/mypage/edit/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") @Positive Long userId,
                                    @Valid @RequestBody UserPatchDto userPatchDto) {

        userPatchDto.setUserId(userId);

        User user = userService.updateUser(mapper.userPatchDtoToUser(userPatchDto));
        UserResponseDto response = mapper.userToUserResponseDto(user);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    //회원 마이페이지
    @GetMapping("/mypage/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") @Positive Long userId) {

        User user = userService.getUser(userId);
        UserResponseDto response = mapper.userToUserResponseDto(user);

        return new ResponseEntity(response, HttpStatus.OK);
    }
    //회원삭제
    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") @Positive Long userId) {

        userService.deleteUser(userId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);

    }
}
