package seb45_main_029.server.advice;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import seb45_main_029.server.exception.BusinessLogicException;
import seb45_main_029.server.response.ErrorResponse;

import javax.validation.ConstraintViolationException;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionAdvice {

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {

        final ErrorResponse errorResponse = ErrorResponse.of(exception.getBindingResult());

        return errorResponse;
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleConstraintViolationException(ConstraintViolationException exception) {

        final ErrorResponse errorResponse = ErrorResponse.of(exception.getConstraintViolations());

        return errorResponse;
    }

    @ExceptionHandler
    public ResponseEntity handleBusinessLogicException(BusinessLogicException exception) {

        final ErrorResponse errorResponse = ErrorResponse.of(exception.getExceptionCode());

        return new ResponseEntity<>(errorResponse, HttpStatus.valueOf(exception.getExceptionCode().getStatus()));

    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleMissingServletRequestParamsException(MissingServletRequestParameterException exception) {

        final ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.BAD_REQUEST, exception.getMessage());

        return errorResponse;
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    public ErrorResponse handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException exception) {

        final ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.METHOD_NOT_ALLOWED);

        return errorResponse;
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleException(Exception exception) {
        log.error("# handle Exception", exception);

        final ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.INTERNAL_SERVER_ERROR);

        return errorResponse;
    }
}
