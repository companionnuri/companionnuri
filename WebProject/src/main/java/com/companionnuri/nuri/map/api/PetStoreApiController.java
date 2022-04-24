package com.companionnuri.nuri.map.api;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.companionnuri.nuri.map.domain.Store;
import com.companionnuri.nuri.map.service.PetStoreService;
import com.companionnuri.nuri.map.service.openapi.ApiQuery;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
public class PetStoreApiController {

	private final PetStoreService petStoreService;

	@GetMapping("/search")
	SuccessResponseResult search(SearchRequest request) {
		List<Store> stores = petStoreService.searchStores(createQuery(request));
		return new SuccessResponseResult(stores);
	}

	@Data
	static class SearchRequest {
		private String query;
		private String category;
		private String city;
		private String region;
		private String page = "1";
		private String perPage = "10";
	}

	public ApiQuery createQuery(SearchRequest request) {
		return new ApiQuery.Builder()
			.putQuery("page", request.getPage())
			.putQuery("perPage", request.getPerPage())
			.build();
	}

	static class SearchResponse {

	}


}
