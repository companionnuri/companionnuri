package com.companionnuri.nuri.controller;

import com.companionnuri.nuri.model.service.NuriInfoService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/nuri")
@CrossOrigin("*")
@RequiredArgsConstructor
public class NuriInfoController {

    private final NuriInfoService nuriInfoService;

    @ApiOperation(value = "해당 카테고리에 해당하는 서울 내 모든 Location을 반환한다.", notes = "카테고리 ID를 URL에 입력해야 함")
    @GetMapping("/category/{categoryId}")
    public ResponseEntity<?> getLocationCategory(@PathVariable int categoryId) {
        try {
            Map<String, Object> resultMap = new HashMap<>();
            resultMap.put("locations", nuriInfoService.getLocationCategory(categoryId));
            return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @ApiOperation(value = "해당 지역의 중심좌표와 서울 전역의 모든 Location을 반환한다.", notes = "지역코드 5자리를 URL에 입력해야 함: 예시로 관악구는 11680, 종로구는 11110")
    @GetMapping("/region/{regionCode}")
    public ResponseEntity<?> getLocationRegion(@PathVariable int regionCode) {
        try {
            Map<String, Object> resultMap = new HashMap<>();
            resultMap.put("regionProj", nuriInfoService.getRegionProj(regionCode));
            resultMap.put("locations", nuriInfoService.getLocationAll());
            return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "해당 ID값을 가진 Location의 상세정보를 반환한다.")
    @GetMapping("/detail/{locationId}")
    public ResponseEntity<?> getLocationDetail(@PathVariable int locationId) {
        try {
            Map<String, Object> resultMap = new HashMap<>();
            resultMap.put("location", nuriInfoService.getLocationDetail(locationId));
            return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
