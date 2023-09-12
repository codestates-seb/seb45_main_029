package seb45_main_029.server.answer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb45_main_029.server.answer.dto.AnswerPostDto;
import seb45_main_029.server.answer.dto.AnswerUpdateDto;
import seb45_main_029.server.answer.entity.Answer;
import seb45_main_029.server.answer.mapper.AnswerMapper;
import seb45_main_029.server.answer.service.AnswerService;
import seb45_main_029.server.response.MultiResponseDto;
import seb45_main_029.server.response.SingleResponseDto;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/answer")
@RestController
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper answerMapper;


    @PostMapping("/{board-id}")
    public ResponseEntity postComment(@RequestBody AnswerPostDto answerPostDto,
                                      @PathVariable("board-id") long questionId) {
        Answer answer = answerMapper.answerPostDtoToAnswer(answerPostDto);
        Answer response = answerService.post(answer, questionId);

        return new ResponseEntity<>(new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(response)), HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity updateAnswer(@RequestBody AnswerUpdateDto answerUpdateDto,
                                        @PathVariable("answer-id") long answerId) {
        answerUpdateDto.setAnswerId(answerId);
        Answer answer = answerMapper.answerUpdateDtoToAnswer(answerUpdateDto);
        Answer response = answerService.update(answer);

        return new ResponseEntity<>(new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(response)), HttpStatus.OK);
    }


    @GetMapping("/{question-id}")
    public ResponseEntity getAnswers(@RequestParam int page,
                                      @RequestParam int size,
                                      @PathVariable("question-id") long questionId) {
        Page<Answer> answerPage = answerService.getAnswers(page - 1, size, questionId);
        List<Answer> answers = answerPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(answerMapper.answerToAnswerResponseDtos(answers), answerPage), HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId) {

        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
