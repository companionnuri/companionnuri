package com.companionnuri.nuri.model.dto;

public class SigunguDto {

    int regionCode;
    String regionName;
    String regionLat;
    String regionLng;

    public String getRegionLat() {
        return regionLat;
    }

    public void setRegionLat(String regionLat) {
        this.regionLat = regionLat;
    }

    public String getRegionLng() {
        return regionLng;
    }

    public void setRegionLng(String regionLng) {
        this.regionLng = regionLng;
    }

    public int getRegionCode() {
        return regionCode;
    }

    public void setRegionCode(int regionCode) {
        this.regionCode = regionCode;
    }

    public String getRegionName() {
        return regionName;
    }

    public void setRegionName(String regionName) {
        this.regionName = regionName;
    }
}
