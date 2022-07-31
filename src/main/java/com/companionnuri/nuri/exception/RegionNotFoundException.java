package com.companionnuri.nuri.exception;

import lombok.extern.slf4j.Slf4j;

public class RegionNotFoundException extends BadRequestException {

    public RegionNotFoundException() {
        super("[ERROR] 존재하지 않는 지역입니다.");
    }
}
