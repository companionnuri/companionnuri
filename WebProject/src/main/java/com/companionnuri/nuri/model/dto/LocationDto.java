package com.companionnuri.nuri.model.dto;

public class LocationDto {

    int locationId;
    int categoryId;
    String locationName;
    String locationAddr;
    String locationRoadAddr;
    String locationTel;

    public int getLocationId() {
        return locationId;
    }

    public void setLocationId(int locationId) {
        this.locationId = locationId;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public String getLocationAddr() {
        return locationAddr;
    }

    public void setLocationAddr(String locationAddr) {
        this.locationAddr = locationAddr;
    }

    public String getLocationRoadAddr() {
        return locationRoadAddr;
    }

    public void setLocationRoadAddr(String locationRoadAddr) {
        this.locationRoadAddr = locationRoadAddr;
    }

    public String getLocationTel() {
        return locationTel;
    }

    public void setLocationTel(String locationTel) {
        this.locationTel = locationTel;
    }
}
