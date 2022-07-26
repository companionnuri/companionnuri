package com.companionnuri.nuri.exception;

import lombok.extern.slf4j.Slf4j;

public class WrongRegionCodeException extends BadRequestException {

    public WrongRegionCodeException() {
        super("[ERROR] 잘못된 지역코드가 입력되었습니다.");
    }
}
