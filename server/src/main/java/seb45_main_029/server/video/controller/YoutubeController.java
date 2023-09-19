package seb45_main_029.server.video.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import seb45_main_029.server.common.Job;
import seb45_main_029.server.common.PainArea;
import seb45_main_029.server.video.entity.Video;
import seb45_main_029.server.video.service.YoutubeService;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class YoutubeController {

    private final YoutubeService youtubeService;

    @PostMapping("/youtube")
    public ResponseEntity search(@RequestParam String query,
                                 @RequestParam(required = false) PainArea painArea,
                                 @RequestParam(required = false) Job job,
                                 @RequestParam long maxResult) {

        List<Video> result = youtubeService.youtubeSearch(query, maxResult, painArea, job);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
