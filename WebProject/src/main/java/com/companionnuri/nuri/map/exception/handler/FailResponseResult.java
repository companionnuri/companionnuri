package com.companionnuri.nuri.map.exception.handler;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class FailResponseResult {
	private String state;
	private String message;
}