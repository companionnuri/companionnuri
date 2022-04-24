package com.companionnuri.nuri.map.service.openapi.strategy;

import java.util.List;

import org.json.JSONObject;

import com.companionnuri.nuri.map.domain.Store;

public interface ApiStrategy {
	List<Store> handle(JSONObject json);
}
