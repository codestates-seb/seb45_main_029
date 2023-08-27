package seb45_main_029.server.exception;

import lombok.Getter;

public enum ExceptionCode {
    // 각자 필요한 부분 작성
    MEMBER_NOT_FOUND(404,"Member Not Found");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
