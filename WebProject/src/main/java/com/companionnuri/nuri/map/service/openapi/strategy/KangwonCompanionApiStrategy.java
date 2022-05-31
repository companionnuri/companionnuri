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
public class KangwonCompanionApiStrategy implements ApiStrategy {

	@Override
	public List<Store> handle(JSONObject json) {
		log.info("json={}", json);
		JSONArray jsonArray = json.getJSONArray("data");
		List<Store> stores = new ArrayList<>();
		for (int i = 0; i < jsonArray.length(); i++) {
			JSONObject object = jsonArray.getJSONObject(i);
			try {
				Store store = new Store.Builder().name(object.getString("업체명"))
					.category(object.getString("업체구분"))
					.street(object.getString("지번 주소"))
					.latitude(object.getString("위도"))
					.longitude(object.getString("경도"))
					.build();
				stores.add(store);
			} catch (Exception e) {
				System.out.println(object.toString());
			}
		}
		return stores;
	}
}
