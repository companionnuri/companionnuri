package com.companionnuri.nuri.model.service;

import com.companionnuri.nuri.model.dto.LocationDto;
import com.companionnuri.nuri.model.dto.LocationListDto;

import java.util.List;
import java.util.Map;

public interface NuriInfoService {

    List<LocationListDto> getLocationCategory(int categoryId) throws Exception;
    List<LocationListDto> getLocationAll() throws  Exception;
    Map<String, String> getRegionProj(int regionCode) throws Exception;
    LocationDto getLocationDetail(int locationId) throws  Exception;

}
