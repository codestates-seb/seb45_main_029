package seb45_main_029.server.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb45_main_029.server.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question,Long> {

}
