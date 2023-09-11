package seb45_main_029.server.user.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.video.entity.Video;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
