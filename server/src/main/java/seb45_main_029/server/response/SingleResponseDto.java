package seb45_main_029.server.response;

import lombok.Getter;

@Getter
public class SingleResponseDto<T> {
    private T data;
    private ErrorResponse error;

    public SingleResponseDto(T data) {
        this.data = data;
        this.error = null;
    }
}
