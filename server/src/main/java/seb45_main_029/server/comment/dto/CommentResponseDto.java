package seb45_main_029.server.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;


@Getter
@Builder
@AllArgsConstructor
public class CommentResponseDto {

    private long comment_id;

    private long board_id;

    private long user_id;

    private String username;

    private String body;

    private List<CommentResponseDto> comment;

    private boolean accepted;

    private LocalDateTime created_at;

    private LocalDateTime modified_at;
}
