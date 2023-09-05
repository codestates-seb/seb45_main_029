package seb45_main_029.server.response;

import lombok.Getter;

@Getter
public class SingleResponseDto<T> {
    private T data;

    public SingleResponseDto(T data) {
        this.data = data;
    }
}
