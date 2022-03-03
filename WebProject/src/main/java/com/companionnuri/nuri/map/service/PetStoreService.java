package com.companionnuri.nuri.map.service;

import java.util.List;

import com.companionnuri.nuri.map.domain.Address;
import com.companionnuri.nuri.map.domain.PetStore;
import com.companionnuri.nuri.map.domain.StoreCategory;

public interface PetStoreService {

	List<PetStore> searchStores(String name);

	List<PetStore> searchStores(Address address);

	List<PetStore> searchStores(StoreCategory category);
}
