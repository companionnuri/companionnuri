package com.companionnuri.nuri.model.service;

import com.companionnuri.nuri.exception.CategoryNotFoundException;
import com.companionnuri.nuri.model.dto.LocationDto;
import com.companionnuri.nuri.model.dto.LocationListDto;
import com.companionnuri.nuri.model.mapper.NuriInfoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class NuriInfoServiceImpl implements NuriInfoService {

    private final NuriInfoMapper nuriInfoMapper;

    @Override
    public List<LocationListDto> getLocationCategory(int categoryId) {
        return nuriInfoMapper.getLocationCategory(categoryId);
    }

    @Override
    public List<LocationListDto> getLocationAll() {
        return nuriInfoMapper.getLocationAll();
    }

    @Override
    public Map<String, String> getRegionProj(int regionCode) {
//        Map<String, String> map = nuriInfoMapper.getRegionProj(regionCode);
//        validateRegionCode(map);
        return nuriInfoMapper.getRegionProj(regionCode);
    }


    @Override
    public LocationDto getLocationDetail(int locationId) {
        return nuriInfoMapper.getLocationDetail(locationId);
    }

}
