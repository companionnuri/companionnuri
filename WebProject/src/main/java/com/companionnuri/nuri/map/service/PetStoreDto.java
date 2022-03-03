package com.companionnuri.nuri.map.service;

import com.companionnuri.nuri.map.domain.Address;
import com.companionnuri.nuri.map.domain.StoreCategory;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PetStoreDto {
	private Address address;
	private StoreCategory category;

	public PetStoreDto() {
	}

	public PetStoreDto(Address address, StoreCategory category){
		this.address = address;
		this.category = category;
	};
}
