package com.companionnuri.nuri.map.service;

import java.util.List;

import com.companionnuri.nuri.map.domain.Store;
import com.companionnuri.nuri.map.service.openapi.ApiQuery;

public interface PetStoreService {
	List<Store> searchStoresAsync(ApiQuery apiQuery);

	List<Store> searchStores(ApiQuery apiQuery);

	List<Store> searchStoresWithParallel(ApiQuery apiQuery);
}
