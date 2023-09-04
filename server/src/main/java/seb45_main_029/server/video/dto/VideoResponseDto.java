package seb45_main_029.server.video.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;


@AllArgsConstructor
@Getter
public class VideoResponseDto {
    private long videoId;
    private String title;
    private String youtubeLink;
    private String thumbnail;
    private String bookmarkCount;
    private String category;
    private String description;
    private List<String > tags;
}
