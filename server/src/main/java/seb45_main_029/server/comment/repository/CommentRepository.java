package seb45_main_029.server.comment.repository;

import seb45_main_029.server.comment.entity.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment, Long> {



    @Query("SELECT q FROM Comment q WHERE q.board.boardId = :questionId AND q.deleted = :deleted")
    Page<Comment> findByQuestionIdAndDeleted(long questionId, boolean deleted, Pageable pageable);

    @Query("SELECT q FROM Comment q WHERE q.commentId = :commentId AND q.deleted = :deleted")
    Optional<Comment> findByCommentIdAndDeleted(long commentId, boolean deleted);

    @Modifying
    @Query("UPDATE Comment q SET q.accepted = CASE WHEN q.accepted = true THEN false ELSE true END WHERE q = :comment")
    void changeAcceptedAndSave(@Param("comment") Comment comment);
    Comment findAllByDeleted(boolean deleted);


}