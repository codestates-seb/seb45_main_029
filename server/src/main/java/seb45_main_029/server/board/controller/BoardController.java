package seb45_main_029.server.board.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb45_main_029.server.board.dto.BoardPatchDto;
import seb45_main_029.server.board.dto.BoardPostDto;
import seb45_main_029.server.board.dto.BoardResponseDto;
import seb45_main_029.server.board.entity.Board;
import seb45_main_029.server.board.mapper.BoardMapper;
import seb45_main_029.server.board.service.BoardService;
import seb45_main_029.server.response.MultiResponseDto;

import java.util.List;

@Validated
@RestController
@RequestMapping("/board")
public class BoardController {

    private final BoardService boardService;
    private final BoardMapper boardMapper;

    public BoardController(BoardService boardService, BoardMapper boardMapper) {
        this.boardService = boardService;
        this.boardMapper = boardMapper;
    }

    @PostMapping
    public ResponseEntity<?> postBoard(@RequestBody BoardPostDto requestBody) {
        Board board = boardMapper.boardPostDtoToBoard(requestBody);
        boardService.createBoard(board);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchBoard(@PathVariable("id") int id, @RequestBody BoardPatchDto requestBody) {
        Board board = boardMapper.boardPatchDtoToBoard(requestBody);
        boardService.updateBoard(board);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBoard(@PathVariable("id") int boardId) {
        Board board = boardService.findBoard(boardId);
        board.setViewCount(board.getViewCount() + 1);
        BoardResponseDto boardResponseDto = boardMapper.boardToBoardResponseDto(board);
        return new ResponseEntity<>(boardResponseDto, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getBoards(@RequestParam int page, @RequestParam int size) {
        Page<Board> pageBoards = boardService.findAllBoard(false, page - 1, size);
        List<Board> boards = pageBoards.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(boardMapper.boardsToBoardResponseDto(boards), pageBoards),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBoard(@PathVariable("id") int boardId) {
        Board board = boardService.findBoard(boardId);
        board.setDeleted(true);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
