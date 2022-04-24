package com.companionnuri.nuri.map.service.openapi;

import java.util.List;

import com.companionnuri.nuri.map.domain.Store;

public interface OpenApi {

	List<Store> getData(ApiQuery apiQuery);

}
