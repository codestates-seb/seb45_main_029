package seb45_main_029.server.board.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import seb45_main_029.server.board.entity.Board;

import java.util.Optional;

public interface BoardRepository extends JpaRepository<Board, Long> {

    @Query("SELECT q FROM Board q WHERE q.boardId = :boardId AND q.deleted = :deleted ")
    Optional<Board> findByBoardIdAndDeleted(long boardId, boolean deleted);

    @Query("SELECT q FROM Board q WHERE (q.title LIKE %:text% OR q.body LIKE %:text%) AND q.deleted = :deleted")
    Page<Board> findByTitleOrBody(@Param("text") String text, boolean deleted, Pageable pageable);

    @Modifying
    @Query("UPDATE Board q SET q.viewCount = q.viewCount + 1 WHERE q = :board")
    void incrementViewCountAndSave(@Param("board") Board board);

    @Modifying
    @Query("UPDATE Board q SET q.accepted = CASE WHEN q.accepted = true THEN false ELSE true END WHERE q = :board")
    void changeAcceptedAndSave(@Param("board") Board board);

    Page<Board> findAllByDeleted(boolean deleted, Pageable pageable);
}