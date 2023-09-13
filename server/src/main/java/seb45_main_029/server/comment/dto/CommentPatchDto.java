package seb45_main_029.server.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommentPatchDto {
    private long id;
    private String body;

}