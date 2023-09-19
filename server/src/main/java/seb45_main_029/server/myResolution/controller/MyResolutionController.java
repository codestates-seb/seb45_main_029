package seb45_main_029.server.myResolution.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb45_main_029.server.myResolution.dto.MyResolutionPostDto;
import seb45_main_029.server.myResolution.entity.MyResolution;
import seb45_main_029.server.myResolution.mapper.MyResolutionMapper;
import seb45_main_029.server.myResolution.service.MyResolutionService;
import seb45_main_029.server.response.MultiResponseDto;
import seb45_main_029.server.response.SingleResponseDto;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/myResolution")
@RestController
public class MyResolutionController {

    private final MyResolutionService myResolutionService;
    private final MyResolutionMapper myResolutionMapper;

    @PostMapping
    public ResponseEntity post(@RequestBody MyResolutionPostDto myResolutionPostDto) {

        MyResolution myResolution = myResolutionMapper.myResolutionDtoToMyResolution(myResolutionPostDto);
        MyResolution response = myResolutionService.post(myResolution);

        return new ResponseEntity<>(new SingleResponseDto<>(myResolutionMapper.myResolutionToMyResolutionDto(response)), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getMyResolutions(@RequestParam int page,
                                           @RequestParam int size) {
        Page<MyResolution> myResolutionPage = myResolutionService.getMyResolutions(page - 1, size);
        List<MyResolution> myResolutions = myResolutionPage.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(
                        myResolutionMapper.myResolutionsToMyResolutionDtos(myResolutions), myResolutionPage), HttpStatus.OK);
    }
}
