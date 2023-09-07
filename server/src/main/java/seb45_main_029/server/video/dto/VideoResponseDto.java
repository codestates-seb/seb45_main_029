package seb45_main_029.server.video.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import seb45_main_029.server.common.Job;
import seb45_main_029.server.common.PainArea;
import seb45_main_029.server.video.entity.Video;

import java.util.List;


@AllArgsConstructor
@Getter
public class VideoResponseDto {
    private long videoId;
    private String title;
    private String youtubeLink;
    private String thumbnail;
    private String description;
    private long bookmarkCount;
    private long viewCount;
    private PainArea painArea;
    private Job job;
}
