package seb45_main_029.server.myResolution.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
public class MyResolutionResponseDto {

    private long myResolutionId;
    private long userId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
