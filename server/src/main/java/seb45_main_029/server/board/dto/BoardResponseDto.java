package seb45_main_029.server.board.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import seb45_main_029.server.comment.dto.CommentResponseDto;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class BoardResponseDto {

        private long board_id;

        private long user_id;

        private String username;

        private String title;

        private String body;

        private List<BoardResponseDto> board_comment;

        private int view_count;

        private boolean accepted;

        private LocalDateTime created_at;

        private LocalDateTime modified_at;



}
