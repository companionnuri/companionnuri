package com.companionnuri.nuri.model.service;

import com.companionnuri.nuri.model.dto.LocationDto;
import com.companionnuri.nuri.model.dto.LocationListDto;
import com.companionnuri.nuri.model.mapper.NuriInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NuriInfoServiceImpl implements NuriInfoService {

    @Autowired
    NuriInfoMapper nuriInfoMapper;

    @Override
    public List<LocationListDto> getLocationCategory(int categoryId) throws Exception {
        return nuriInfoMapper.getLocationCategory(categoryId);
    }

    @Override
    public List<LocationListDto> getLocationRegion(int regionCode) throws Exception {
        return nuriInfoMapper.getLocationRegion(regionCode);
    }

    @Override
    public LocationDto getLocationDetail(int locationId) throws Exception {
        return nuriInfoMapper.getLocationDetail(locationId);
    }
}
