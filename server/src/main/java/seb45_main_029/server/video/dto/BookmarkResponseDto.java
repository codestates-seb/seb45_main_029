package seb45_main_029.server.video.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class BookmarkResponseDto {
    private long userId;
    private String username;
    private String nickname;
    private List<Long> bookmark;

}
