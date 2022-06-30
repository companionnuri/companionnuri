package com.companionnuri.nuri.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LocationListDto {

    private int locationId;
    private int categoryId;
    private String locationName;
    private String locationLng;
    private String locationLat;

}
