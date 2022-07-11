package com.companionnuri.nuri.exception;

public class SearchResultNotFoundException extends BadRequestException{

    public SearchResultNotFoundException() {
        super("[SORRY] 검색 결과가 존재하지 않습니다.");
    }
}
