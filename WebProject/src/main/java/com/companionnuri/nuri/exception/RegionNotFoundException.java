package com.companionnuri.nuri.exception;

public class RegionNotFoundException extends BadRequestException {

    public RegionNotFoundException() {
        super("[ERROR] 존재하지 않는 지역입니다.");
    }
}
