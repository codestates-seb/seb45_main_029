package seb45_main_029.server.user.mapper;


import org.mapstruct.Mapper;
import seb45_main_029.server.user.dto.UserPatchDto;
import seb45_main_029.server.user.dto.UserPostDto;
import seb45_main_029.server.user.dto.UserResponseDto;
import seb45_main_029.server.user.entity.User;

import javax.validation.Valid;
import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User userPostDtoToUser(@Valid UserPostDto userPostDto);

    User userPatchDtoToUser(@Valid UserPatchDto userPatchDto);

    UserResponseDto userToUserResponseDto(User user);

}
