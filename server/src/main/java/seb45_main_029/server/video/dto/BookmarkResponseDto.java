package seb45_main_029.server.video.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;

import java.time.LocalDateTime;


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

}
