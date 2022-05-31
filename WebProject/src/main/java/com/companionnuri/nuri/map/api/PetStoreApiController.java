package com.companionnuri.nuri.map.api;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.companionnuri.nuri.map.domain.Store;
import com.companionnuri.nuri.map.service.PetStoreService;
import com.companionnuri.nuri.map.service.openapi.ApiQuery;

import io.swagger.v3.oas.annotations.Operation;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
public class PetStoreApiController {

	private final PetStoreService petStoreService;

	@GetMapping("/search")
	@Operation
	public SuccessResponseResult search(SearchRequest request) {

		// long start = System.currentTimeMillis();
		// List<Store> stores2 = petStoreService.searchStores(createQuery(request));
		// long end = System.currentTimeMillis();
		// log.info("동기쓰레드 소요시간={}", end - start);

		List<Store> stores = petStoreService.searchStoresAsync(createQuery(request));

		// start = System.currentTimeMillis();
		// List<Store> stores3 = petStoreService.searchStoresWithParallel(createQuery(request));
		// end = System.currentTimeMillis();
		// log.info("병렬스트림 소요시간={}", end - start);

		return new SuccessResponseResult(stores);
	}

	public ApiQuery createQuery(SearchRequest request) {
		return new ApiQuery.Builder().putQuery("page", request.getPage())
			.putQuery("perPage", request.getPerPage())
			.build();
	}

	@Data
	static class SearchRequest {
		private String query;
		private String category;
		private String city;
		private String region;
		private String page = "1";
		private String perPage = "35";
	}

	static class SearchResponse {

	}

}
