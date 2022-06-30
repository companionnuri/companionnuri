package com.companionnuri.nuri.controller;

import com.companionnuri.nuri.model.dto.SidoDto;
import com.companionnuri.nuri.model.dto.SigunguDto;
import com.companionnuri.nuri.model.service.RegionSelectService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reg")
@CrossOrigin("*")
@RequiredArgsConstructor
public class RegionSelectController {

    private final RegionSelectService regionSelectService;

    @ApiOperation(value = "서비스 대상이 되는 모든 시/도의 Code와 Name을 반환한다.",
            notes = "현재는 서울만 존재하기 때문에 다소 무의미하지만 서비스 확장 가능성을 고려해 분리함" + "\n" +
                    "반환되는 sidoCode는 전체 지역 코드 중 앞 두자리. 서울 = 11")
    @GetMapping("/sido")
    public ResponseEntity<?> getSidoList() {
        try {
            List<SidoDto> list = regionSelectService.getSidoList();
            return new ResponseEntity<List<SidoDto>>(list, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @ApiOperation(value = "조회한 시/도 내에 존재하는 모든 시/군/구의 Code, Name, 중심좌표를 반환한다.",
            notes = "sidoCode 2자리를 URL에 입력해야 함." + "\n" +
                    "현재는 서울만 서비스 하므로, /11만 입력하게 될 것")
    @GetMapping("/sigungu/{sidoCode}")
    public ResponseEntity<?> getSigunguList(@PathVariable int sidoCode) {
        try {
            List<SigunguDto> list = regionSelectService.getSigunguList(sidoCode);
            return new ResponseEntity<List<SigunguDto>>(list, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
