package seb45_main_029.server.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb45_main_029.server.question.dto.QuestionPostDto;
import seb45_main_029.server.question.dto.QuestionUpdateDto;
import seb45_main_029.server.question.entity.Question;
import seb45_main_029.server.question.mapper.QuestionMapper;
import seb45_main_029.server.question.service.QuestionService;
import seb45_main_029.server.response.MultiResponseDto;
import seb45_main_029.server.response.SingleResponseDto;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/question")
@RestController
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper questionMapper;

    @PostMapping
    public ResponseEntity post(@RequestBody QuestionPostDto questionPostDto) {
        Question question = questionMapper.questionPostDtoToQuestion(questionPostDto);
        Question response = questionService.post(question);

        return new ResponseEntity<>(new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(response)), HttpStatus.CREATED);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity update(@PathVariable("question-id") long questionId,
                                 @RequestBody QuestionUpdateDto questionUpdateDto) {
        questionUpdateDto.setQuestionId(questionId);
        Question question = questionMapper.questionUpdateDtoToQuestion(questionUpdateDto);
        Question response = questionService.update(question);

        return new ResponseEntity<>(new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(response)), HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity get(@PathVariable("question-id") long questionId) {

        Question response = questionService.getQuestion(questionId);

        return new ResponseEntity<>(new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(response)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getPosts(@RequestParam int page,
                                   @RequestParam int size) {
        Page<Question> answerPage = questionService.getQuestions(page - 1, size);
        List<Question> questionList = answerPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(questionMapper.questionToQuestionResponseDtos(questionList), answerPage), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deletePost(@PathVariable("question-id") long questionId) {
        questionService.deletePost(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
