package seb45_main_029.server.point.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@Setter
@Getter
public class PointResponseDto {
    private long pointId;
    private long userId;
    private long point;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
