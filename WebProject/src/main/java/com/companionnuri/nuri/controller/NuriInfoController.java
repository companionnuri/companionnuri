package com.companionnuri.nuri.controller;

import com.companionnuri.nuri.exception.CategoryNotFoundException;
import com.companionnuri.nuri.exception.LocationNotFoundException;
import com.companionnuri.nuri.exception.RegionNotFoundException;
import com.companionnuri.nuri.model.dto.LocationDto;
import com.companionnuri.nuri.model.dto.LocationListDto;
import com.companionnuri.nuri.model.service.NuriInfoService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/nuri")
@RequiredArgsConstructor
@Slf4j
public class NuriInfoController {

    private final NuriInfoService nuriInfoService;

    @ApiOperation(value = "해당 카테고리에 해당하는 서울 내 모든 Location을 반환한다.", notes = "카테고리 ID를 URL에 입력해야 함")
    @GetMapping("/category/{categoryId}")
    public ResponseEntity<?> getLocationCategory(@PathVariable int categoryId) {

        Map<String, Object> resultMap = new HashMap<>();
        List<LocationListDto> list = nuriInfoService.getLocationCategory(categoryId);
        validateCategoryList(list);
        resultMap.put("locations", list);
        return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);

    }

    private void validateCategoryList(List<LocationListDto> list) {
        if (list.isEmpty()) {
            throw new CategoryNotFoundException();
        }
    }

    @ApiOperation(value = "해당 지역의 중심좌표와 서울 전역의 모든 Location을 반환한다.", notes = "지역코드 5자리를 URL에 입력해야 함: 예시로 관악구는 11680, 종로구는 11110")
    @GetMapping("/region/{regionCode}")
    public ResponseEntity<?> getLocationRegion(@PathVariable int regionCode) {

        Map<String, Object> resultMap = new HashMap<>();
        Map<String, String> regionProj = nuriInfoService.getRegionProj(regionCode);
        validateRegionCode(regionProj);
        resultMap.put("regionProj", regionProj);
        resultMap.put("locations", nuriInfoService.getLocationAll());
        return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
    }

    private void validateRegionCode(Map<String, String> regionProj) {
        if (regionProj == null || regionProj.isEmpty()) {
            throw new RegionNotFoundException();
        }
    }

    @ApiOperation(value = "해당 ID값을 가진 Location의 상세정보를 반환한다.")
    @GetMapping("/detail/{locationId}")
    public ResponseEntity<?> getLocationDetail(@PathVariable int locationId) {

        Map<String, Object> resultMap = new HashMap<>();
        LocationDto locationDto = nuriInfoService.getLocationDetail(locationId);
        validateLocationId(locationDto);
        resultMap.put("location", locationDto);
        return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);

    }

    private void validateLocationId(LocationDto locationDto) {
        if (locationDto == null) {
            throw new LocationNotFoundException();
        }
    }
}
