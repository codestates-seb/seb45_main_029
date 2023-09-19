package seb45_main_029.server.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb45_main_029.server.user.entity.User;

import java.util.Optional;
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
