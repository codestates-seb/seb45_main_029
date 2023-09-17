package seb45_main_029.server.video.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.common.Job;
import seb45_main_029.server.common.PainArea;



@Getter
@Setter
@NoArgsConstructor
public class BookmarkResponseDto {

    private long bookmarkId;

    private long userId;
    private String username;

    private long videoId;
    private String title;
    private String youtubeLink;
    private String thumbnail;
    private Job job;
    private PainArea painArea;

}
