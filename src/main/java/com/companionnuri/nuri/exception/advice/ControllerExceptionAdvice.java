package com.companionnuri.nuri.exception.advice;

import com.companionnuri.nuri.controller.response.FailResponse;
import com.companionnuri.nuri.exception.BadRequestException;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.TypeMismatchException;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageConversionException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@ResponseStatus(HttpStatus.BAD_REQUEST)
@Slf4j
public class ControllerExceptionAdvice {

    @ExceptionHandler
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public FailResponse exceptionHandler(Exception e) {
        return new FailResponse("[ERROR] 서버 오류");
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public FailResponse illegalStateExceptionHandler(IllegalStateException e) {
        return new FailResponse("[ERROR] 잘못된 입력입니다.");
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public FailResponse notValidExceptionHandler(JsonProcessingException e) {
        return new FailResponse("[ERROR] 잘못된 입력입니다.");
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public FailResponse notValidExceptionHandler(HttpMessageConversionException e) {
        return new FailResponse("[ERROR] 잘못된 입력입니다.");
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public FailResponse typeMismatchExceptionHandler(TypeMismatchException e) {
        return new FailResponse("[ERROR] 잘못된 입력입니다.");
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public FailResponse servletRequestBindingExceptionHandler(ServletRequestBindingException e) {
        return new FailResponse("[ERROR] 잘못된 입력입니다.");
    }


    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public FailResponse httpRequestMethodNotSupportedExceptionHandler(HttpRequestMethodNotSupportedException e) {
        return new FailResponse("[ERROR] 해당 메서드는 지원하지 않습니다.");
    }

    @ExceptionHandler
    public FailResponse badRequestExceptionHandler(BadRequestException e) {
        return new FailResponse(e.getMessage());
    }

    // URL을 잘못 입력해서 발생하는 404에러는 DispatcherServlet 선에서 나타나기 때문에 여기서 컨트롤할 수 없다.

}
