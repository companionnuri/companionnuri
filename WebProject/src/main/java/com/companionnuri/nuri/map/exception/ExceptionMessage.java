package com.companionnuri.nuri.map.exception;

public enum ExceptionMessage {
	NO_SUCH_PET_STORE_EXCEPTION_MESSAGE("[ERROR] 존재하지 않는 가ꂌ입니다.");

	private final String message;

	ExceptionMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return message;
	}
}
