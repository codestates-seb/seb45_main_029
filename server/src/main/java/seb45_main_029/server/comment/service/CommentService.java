package seb45_main_029.server.comment.service;

import seb45_main_029.server.board.entity.Board;
import seb45_main_029.server.board.service.BoardService;
import seb45_main_029.server.comment.entity.Comment;
import seb45_main_029.server.exception.BusinessLogicException;
import seb45_main_029.server.exception.ExceptionCode;
import seb45_main_029.server.comment.repository.CommentRepository;
import seb45_main_029.server.board.repository.BoardRepository;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.comment.mapper.CommentMapper;
import seb45_main_029.server.user.service.UserService;

import java.util.Optional;

@Transactional
@Service
public class CommentService {
    private final BoardService boardService;
    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;
    private final UserService userService;

    public CommentService(BoardService boardService, BoardRepository boardRepository, CommentRepository commentRepository, CommentMapper commentMapper, UserService userService) {
        this.boardService = boardService;
        this.boardRepository = boardRepository;
        this.commentRepository = commentRepository;
        this.commentMapper = commentMapper;
        this.userService = userService;
    }

    public Comment createComment(long boardId, Comment comment) {
        User loginuser = userService.getLoginUser();
        if (boardService.findBoard(boardId).getUser().getUserId() == loginuser.getUserId())
            throw new BusinessLogicException(ExceptionCode.FORBIDDEN_REQUEST);
        Board findBoard = boardRepository.findById(boardId).orElseThrow();
        comment.setBoard(findBoard);
        comment.setUser(loginuser);

        return commentRepository.save(comment);
    }

    @Transactional(readOnly = true)
    public Comment findComment(long commentId) {
        Optional<Comment> optionalComment = commentRepository.findById(commentId);
        return optionalComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }

    @Transactional(readOnly = true)
    public Comment findCommentByDeleted(long commentId, boolean deleted) {
        Optional<Comment> optionalComment = commentRepository.findByCommentIdAndDeleted(commentId, deleted);
        return optionalComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }


    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public void updateComment(Comment comment) {
        Comment findcomment = findCommentByDeleted(comment.getId(), comment.isDeleted());
        long loginUserId = userService.getLoginUser().getUserId();
        if (findcomment.getUser().getUserId() != loginUserId)
            throw new BusinessLogicException(ExceptionCode.FORBIDDEN_REQUEST);
        Optional.ofNullable(comment.getBody())
                .ifPresent(findcomment::setBody);

        commentRepository.save(findcomment);
    }

   // public void acceptComment(Comment Comment, long userId) {
    //    Board board = Comment.getComment();
     //   if (board.getUser().getUserId() != userId)
     //       throw new BusinessLogicException(ExceptionCode.FORBIDDEN_REQUEST);
     //   commentRepository.changeAcceptedAndSave(Comment);
     //   boardRepository.changeAcceptedAndSave(board);
   // }

    public void deleteComment(long commentId, long memberId) {
        Comment comment = findComment(commentId);
        if (comment.getUser().getUserId() != memberId)
            throw new BusinessLogicException(ExceptionCode.FORBIDDEN_REQUEST);
        comment.setDeleted(true);
        commentRepository.delete(comment);
    }

        public Page<Comment> findAllComment ( boolean b, int i, int size){
        return null;
        }
    }
