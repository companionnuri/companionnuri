package com.companionnuri.nuri.model.service;

import com.companionnuri.nuri.model.dto.LocationDto;
import com.companionnuri.nuri.model.dto.LocationListDto;

import java.util.List;

public interface NuriInfoService {

    List<LocationListDto> getLocationCategory(int categoryId) throws Exception;
    List<LocationListDto> getLocationRegion(int regionCode) throws  Exception;

    LocationDto getLocationDetail(int locationId) throws  Exception;

}
