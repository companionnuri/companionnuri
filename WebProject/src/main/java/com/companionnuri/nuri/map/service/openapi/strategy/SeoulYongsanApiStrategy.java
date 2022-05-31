package com.companionnuri.nuri.map.service.openapi.strategy;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Component;

import com.companionnuri.nuri.map.domain.Store;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class SeoulYongsanApiStrategy implements ApiStrategy {

	@Override
	public List<Store> handle(JSONObject json) {
		log.info("json={}", json);
		JSONArray jsonArray = json.getJSONArray("data");
		List<Store> stores = new ArrayList<>();
		for (int i = 0; i < jsonArray.length(); i++) {
			JSONObject object = jsonArray.getJSONObject(i);
			Store store = new Store.Builder().name(object.getString("업소명"))
				.category("동물 병원")
				.street(object.getString("사업장소재지"))
				.build();
			stores.add(store);
		}
		return stores;
	}
}
