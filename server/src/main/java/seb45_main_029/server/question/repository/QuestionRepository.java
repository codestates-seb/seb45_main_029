package seb45_main_029.server.question.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import seb45_main_029.server.question.entity.Question;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question,Long> {

    @Query("SELECT q FROM Question q where q.isDeleted = false")
    Page<Question> findAll(PageRequest pageRequest);

    @Query("SELECT  q from Question q where q.isDeleted = false and q.questionId = :questionId")
    Optional<Question> findByQuestionId(@Param("questionId") long questionId);


    Page<Question> findByStatusIsTrue(PageRequest pageRequest);

    Page<Question> findByStatusIsFalse(PageRequest pageRequest);
}
