package seb45_main_029.server.security.help;

import lombok.AllArgsConstructor;
import lombok.Getter;
import seb45_main_029.server.user.entity.User;

@Getter
@AllArgsConstructor
public class UserRegistrationApplicationEvent {

    private User user;

}
