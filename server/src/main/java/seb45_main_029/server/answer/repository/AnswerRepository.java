package seb45_main_029.server.answer.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import seb45_main_029.server.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer,Long> {

    @Query("select a from Answer a where a.isDeleted = false and a.question.questionId = :questionId")
    Page<Answer> findByQuestionQuestionId (PageRequest pageRequest, @Param("questionId") long boardId);
}
