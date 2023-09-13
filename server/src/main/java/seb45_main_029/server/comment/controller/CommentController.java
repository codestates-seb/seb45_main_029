package seb45_main_029.server.comment.controller;

import seb45_main_029.server.comment.dto.CommentResponseDto;
import seb45_main_029.server.comment.entity.Comment;
import seb45_main_029.server.comment.service.CommentService;
import seb45_main_029.server.comment.mapper.CommentMapper;
import seb45_main_029.server.comment.dto.CommentPatchDto;
import seb45_main_029.server.comment.dto.CommentPostDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb45_main_029.server.response.MultiResponseDto;

import java.util.List;

@Validated
@RestController
@RequestMapping("/Comment")
public class CommentController {

    private final CommentService commentService;

    private final CommentMapper commentMapper;


    public CommentController(CommentService commentService, CommentMapper commentMapper) {
        this.commentService = commentService;
        this.commentMapper = commentMapper;
    }

    @PostMapping("/{boardId}")
    public ResponseEntity<?> postComment(@RequestBody CommentPostDto requestBody,
                                         @PathVariable("boardId") long boardId) {
        Comment comment = commentMapper.commentPostDtoToComment(requestBody);
        commentService.createComment(boardId,comment);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getComment(@PathVariable("id") int commentId) {
        Comment comment = commentService.findComment(commentId);
        CommentResponseDto commentResponseDto = commentMapper.commentToCommentResponseDto(comment);
        return new ResponseEntity<>(commentResponseDto, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getComments(@RequestParam int page, @RequestParam int size) {
        Page<Comment> pageComments = commentService.findAllComment(false, page - 1, size);
        List<Comment> comments = pageComments.getContent();

        ResponseEntity<?> responseEntity = new ResponseEntity<>(
                new MultiResponseDto<>(
                        commentMapper.commentToCommentResponseDto(comments), pageComments), HttpStatus.OK);
        return responseEntity;
        }
    @PatchMapping("/{id}")
    public ResponseEntity<?> patchComment(@PathVariable("id") int id, @RequestBody CommentPatchDto requestBody) {
        Comment comment = commentMapper.commentPatchDtoToComment(requestBody);
        commentService.updateComment(comment);
        return new ResponseEntity<>(HttpStatus.OK);
        }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteComment(@PathVariable("id") int commentId) {
        Comment comment = commentService.findComment(commentId);
        comment.setDeleted(true);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }