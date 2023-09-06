package seb45_main_029.server.comment.controller;

import com.seb45_main_029.server.board.dto.boardResponseDto;
import com.seb45_main_029.server.board.entity.board;
import com.seb45_main_029.server.board.mapper.boardMapper;
import com.seb45_main_029.server.board.service.boardService;
import com.server.board.dto.MultiResponseDto;
import com.server.board.dto.boardPatchDto;
import com.server.board.dto.boardPostDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Validated
@RestController
@RequestMapping("/board")
public class commentController extends ll {

    private final boardService boardService;

    private final boardMapper boardMapper;

    public commentController(boardService boardService, boardMapper  {
        this.boardService = boardService;
        this.boardMapper = boardMapper;
    }

    @PostMapping
    public ResponseEntity postboard(@RequestBody boardPostDto requstBody) {
        board board = boardMapper.boardPostDtoToboard(requstBody);
        boardService.createBoard(board);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity getboard(@PathVariable("id") int board_id) {
        Board Board = boardService.findboard(board_id);
        board.setView_count(board.getView_count()+1);
        boardService.countView_count(board);
        boardResponseDto boardResponseDto = boardMapper.boardToboardResponseDto(board);
        return new ResponseEntity<>(boardResponseDto, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getboards(@RequestParam int page, @RequestParam int size) {
        Page<board> pageboards = boardService.findAllboard(false, page-1, size);
        System.out.println("page");
        List<board> boards = pageboards.getContent();
        System.out.println("list");

        return new ResponseEntity<>(
                new MultiResponseDto<>(
                        boardMapper.boardsToboardResponseDtos(boards), pageboards), HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity patchboard(@PathVariable("id") int id, @RequestBody boardPatchDto requestBody){
        board board = boardMapper.boardPatchDtoToboard(requestBody);
        boardService.updateboard(board);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteboard(@PathVariable("id") int board_id) {
        Board board = boardService.findboard(board_id);
        board.setDeleted(true);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}

}
