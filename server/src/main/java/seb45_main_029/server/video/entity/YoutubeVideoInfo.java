package seb45_main_029.server.video.entity;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class YoutubeVideoInfo {
    private String url;
    private String title;
    private String thumbnailUrl;
    private String description;

    public YoutubeVideoInfo(String url, String title, String thumbnailUrl, String description) {
        this.url = url;
        this.title = title;
        this.thumbnailUrl = thumbnailUrl;
        this.description = description;
    }

}
