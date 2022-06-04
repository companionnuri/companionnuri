package com.companionnuri.nuri.model.mapper;

import com.companionnuri.nuri.model.dto.LocationDto;
import com.companionnuri.nuri.model.dto.LocationListDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NuriInfoMapper {

    List<LocationListDto> getLocationCategory(int categoryId) throws Exception;
    List<LocationListDto> getLocationRegion(int regionCode) throws  Exception;
    LocationDto getLocationDetail(int locationId) throws  Exception;

}
