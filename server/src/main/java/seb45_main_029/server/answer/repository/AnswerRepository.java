package seb45_main_029.server.answer.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import seb45_main_029.server.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer,Long> {

    Page<Answer> findByQuestionQuestionId (PageRequest pageRequest, long boardId);
}
