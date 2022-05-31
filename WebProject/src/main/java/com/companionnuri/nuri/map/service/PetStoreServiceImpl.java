package com.companionnuri.nuri.map.service;

import static java.util.stream.Collectors.*;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.companionnuri.nuri.map.domain.Store;
import com.companionnuri.nuri.map.service.openapi.ApiQuery;
import com.companionnuri.nuri.map.service.openapi.OpenApi;
import com.companionnuri.nuri.map.service.openapi.OpenApiAddress;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PetStoreServiceImpl implements PetStoreService {

	private final OpenApi openApi;
	private final Executor executor = Executors.newFixedThreadPool(Math.min(OpenApiAddress.values().length + 1, 100), r -> {
		Thread t = new Thread(r);
		t.setDaemon(true);
		return t;
	});

	@Override
	public List<Store> searchStoresAsync(ApiQuery apiQuery) {
		//	log.info("apiQuery.getAPI_KEY()={}");

		List<ApiQuery> apiQueries = Arrays.stream(OpenApiAddress.values())
			.map(openApiAddress -> new ApiQuery(apiQuery.getQueryString(), openApiAddress))
			.collect(toList());

		List<CompletableFuture<List<Store>>> collect = apiQueries.stream()
			.map(query -> CompletableFuture.supplyAsync(() -> openApi.getData(query), executor))
			.collect(toList());

		return collect.stream().
			map(CompletableFuture::join).
			flatMap(Collection::stream).
			collect(toList());
	}

	@Override
	public List<Store> searchStoresWithParallel(ApiQuery apiQuery) {
		List<ApiQuery> apiQueries = Arrays.stream(OpenApiAddress.values())
			.map(openApiAddress -> new ApiQuery(apiQuery.getQueryString(), openApiAddress))
			.collect(toList());

		return apiQueries.stream().parallel()
			.map(openApi::getData)
			.flatMap(Collection::stream)
			.collect(toList());
	}

	@Override
	public List<Store> searchStores(ApiQuery apiQuery) {
		List<ApiQuery> apiQueries = Arrays.stream(OpenApiAddress.values())
			.map(openApiAddress -> new ApiQuery(apiQuery.getQueryString(), openApiAddress))
			.collect(toList());

		return apiQueries.stream()
			.map(openApi::getData)
			.flatMap(Collection::stream)
			.collect(toList());
	}

}
