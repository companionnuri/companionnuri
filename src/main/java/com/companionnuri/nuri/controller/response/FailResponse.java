package com.companionnuri.nuri.controller.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class FailResponse {
    private final String state = "FAIL";
    private String message;
}
