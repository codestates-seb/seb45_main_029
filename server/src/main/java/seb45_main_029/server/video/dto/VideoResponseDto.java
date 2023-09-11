package seb45_main_029.server.video.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.common.Job;
import seb45_main_029.server.common.PainArea;
import seb45_main_029.server.video.entity.Video;

import java.time.LocalDateTime;
import java.util.List;


@NoArgsConstructor
@Getter
@Setter
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
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
