package com.companionnuri.nuri.map.service.openapi;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.stereotype.Component;

import com.companionnuri.nuri.map.domain.Store;
import com.companionnuri.nuri.map.service.openapi.strategy.ApiStrategy;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class OpenApiTemplate implements OpenApi {

	private final Map<String, ApiStrategy> apiStrategy;

	@Override
	public List<Store> getData(ApiQuery apiQuery) {
		try {
			URL url = new URL(apiQuery.getUrl());
			HttpURLConnection conn = (HttpURLConnection)url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Content-type", "application/json");

			BufferedReader rd;
			if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
				rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			} else {
				rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
			}

			StringBuilder sb = new StringBuilder();
			String line;
			while ((line = rd.readLine()) != null) {
				sb.append(line);
			}
			rd.close();
			conn.disconnect();

			return apiStrategy.get(apiQuery.getBeanName()).handle(new JSONObject(sb.toString()));

		} catch (Exception e){
			// API 오류 핸들러를 추가하자.
			log.error("error", e);
			throw new IllegalStateException(e);
		}
	}

	// public int getTotalCount() {
	// 	return getData(1, 1).getInt("totalCount");
	// }

}
