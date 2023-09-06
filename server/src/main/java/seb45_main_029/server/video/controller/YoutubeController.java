package seb45_main_029.server.video.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import seb45_main_029.server.video.entity.Video;
import seb45_main_029.server.video.service.YoutubeService;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class YoutubeController {

    private final YoutubeService youtubeService;

    @PostMapping("/youtube")
    public ResponseEntity search(@RequestParam String query,
                                 @RequestParam String category,
                                 @RequestParam long maxResult) {

        List<Video> result = youtubeService.youtubeSearch(query, category, maxResult);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
