package com.companionnuri.nuri.controller;

import com.companionnuri.nuri.model.dto.LocationDto;
import com.companionnuri.nuri.model.dto.LocationListDto;
import com.companionnuri.nuri.model.service.NuriInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/nuri")
@CrossOrigin("*")
public class NuriInfoController {

    @Autowired
    NuriInfoService nuriInfoService;

    @ApiOperation(value = "해당 카테고리에 해당하는 서울 내 모든 Location을 반환한다.", notes ="카테고리 ID를 URL에 입력해야 함" ,response = List.class)
    @GetMapping("/category/{categoryId}")
    public ResponseEntity<?> getLocationCategory(@PathVariable int categoryId) {
        try {
            List<LocationListDto> list = nuriInfoService.getLocationCategory(categoryId);
            return new ResponseEntity<List<LocationListDto>>(list, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @ApiOperation(value = "해당 지역에 있는 모든 카테고리의 Location들을 반환한다.", response = List.class, notes = "지역코드 5자리를 URL에 입력해야 함: 예시로 관악구는 11680, 종로구는 11110")
    @GetMapping("/region/{regionCode}")
    public ResponseEntity<?> getLocationRegion(@PathVariable int regionCode) {
        try {
            List<LocationListDto> list = nuriInfoService.getLocationRegion(regionCode);
            return new ResponseEntity<List<LocationListDto>>(list, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "해당 ID값을 가진 location의 상세정보를 반환한다.", response = Map.class)
    @GetMapping("/detail/{locationId}")
    public ResponseEntity<?> getLocationDetail(@PathVariable int locationId) {
        try {
            LocationDto location = nuriInfoService.getLocationDetail(locationId);
            return new ResponseEntity<LocationDto>(location, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
