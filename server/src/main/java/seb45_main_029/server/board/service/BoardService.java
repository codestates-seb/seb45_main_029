package seb45_main_029.server.board.service;

import org.springframework.data.domain.Page;
import seb45_main_029.server.board.entity.Board;
import seb45_main_029.server.board.repository.BoardRepository;
import seb45_main_029.server.comment.entity.Comment;
import seb45_main_029.server.comment.repository.CommentRepository;
import seb45_main_029.server.exception.BusinessLogicException;
import seb45_main_029.server.exception.ExceptionCode;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.board.mapper.BoardMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import seb45_main_029.server.user.service.UserService;

import java.util.List;
import java.util.Optional;


@Transactional
@Service
public class BoardService {
    private final BoardRepository boardRepository;
    private final BoardMapper boardMapper;
    private final CommentRepository commentRepository;
    private final UserService userService;

    public BoardService(BoardRepository boardRepository, BoardMapper boardMapper, CommentRepository commentRepository, UserService userService) {
        this.boardRepository = boardRepository;
        this.boardMapper = boardMapper;
        this.commentRepository = commentRepository;
        this.userService = userService;
    }


    public Board createBoard(Board board) {
        User loginUser = userService.getLoginUser();
        board.setUser(loginUser);

        return boardRepository.save(board);
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Board getBoardAndUpdateViewCount(long boardId, boolean deleted) {
        Board boardEntity = findBoardByDeleted(boardId, deleted);
        boardRepository.incrementViewCountAndSave(boardEntity);
        return boardEntity;
    }

    @Transactional(readOnly = true)
    public Board findBoardByDeleted(long boardId, boolean deleted) {
        Optional<Board> optionalBoard = boardRepository.findByBoardIdAndDeleted(boardId, deleted);
        if (deleted) {
            throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);
        }
        return optionalBoard.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }

    @Transactional(readOnly = true)
    public Page<Board> findAllBoard(boolean deleted, int page, int size) {
        Sort sort = Sort.by(Sort.Direction.DESC, "createdAt"); //최신순 정렬
        Pageable pageable = PageRequest.of(page, size, sort);
        return boardRepository.findAllByDeleted(deleted, pageable);
    }

    @Transactional(readOnly = true)
    public Page<Board> findBoardByTextAndDeleted(String text, boolean deleted, int page, int size) {
        Sort sort = Sort.by(Sort.Direction.DESC, "createdAt"); //최신순 정렬
        Pageable pageable = PageRequest.of(page, size, sort);
        return boardRepository.findByTitleOrBody(text, deleted, pageable);
    }

    @Transactional(readOnly = true)
    public Board findBoard(long boardId) {
        Optional<Board> optionalBoard = boardRepository.findById(boardId);
        return (Board) optionalBoard.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }


    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Board updateBoard(Board board) {

        Board modifiedBoard = findBoard(board.getBoardId());
        User loginUser = userService.getLoginUser();
        Long userId = loginUser.getUserId();
        if (modifiedBoard.getUser().getUserId() != userId)
            throw new BusinessLogicException(ExceptionCode.FORBIDDEN_REQUEST);

        Optional.ofNullable(board.getTitle())
                .ifPresent(modifiedBoard::setTitle);
        Optional.ofNullable(board.getBody())
                .ifPresent(body -> modifiedBoard.setBody(body));
        Optional.ofNullable(board.isAccepted())
                .ifPresent(modifiedBoard::setAccepted);

        return boardRepository.save(modifiedBoard);
    }

    public void deleteBoard(long boardId, long userId) {
        Board board = findBoard(boardId);
        if (board.getUser().getUserId() != userId) throw new BusinessLogicException(ExceptionCode.FORBIDDEN_REQUEST);
        board.setDeleted(true);
        boardRepository.save(board);

        List<Comment> comments = board.getComments();
        comments.forEach(comment -> comment.setDeleted(true));
        commentRepository.saveAll(comments);

    }
}