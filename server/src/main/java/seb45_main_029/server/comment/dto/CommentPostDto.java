package seb45_main_029.server.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;


import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class CommentPostDto {

    @NotBlank
    private long id;

    @NotBlank
    private String body;
}