package com.companionnuri.nuri.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LocationDto {

    private int locationId;
    private int categoryId;
    private String locationName;
    private String locationAddr;
    private String locationRoadAddr;
    private String locationTel;

}
