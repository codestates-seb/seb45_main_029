package seb45_main_029.server.video.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import seb45_main_029.server.video.entity.YoutubeVideoInfo;
import seb45_main_029.server.video.service.YoutubeService;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class YoutubeController {

    private final YoutubeService youtubeService;

    @PostMapping("/youtube")
    public @ResponseBody List<YoutubeVideoInfo> search(@RequestParam String query,
                                                       @RequestParam long maxResult) {

        List<YoutubeVideoInfo> result = youtubeService.youtubeSearch(query, maxResult);

        return result;
    }
}
