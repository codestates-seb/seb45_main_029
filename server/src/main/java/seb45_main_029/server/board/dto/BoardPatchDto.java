package seb45_main_029.server.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
public class BoardPatchDto {
    @Size(max = 100)
    private String title;

    private String body;

    private boolean accepted;
}
