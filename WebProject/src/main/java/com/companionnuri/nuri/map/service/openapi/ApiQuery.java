package com.companionnuri.nuri.map.service.openapi;

import lombok.Getter;

@Getter
public class ApiQuery {

	private String API_KEY;

	private final StringBuilder queryString;
	private OpenApiAddress apiAddress;

	private ApiQuery(Builder builder) {
		queryString = builder.queryString.append("serviceKey=").append(API_KEY);
	}

	public ApiQuery(StringBuilder queryString, OpenApiAddress openApiAddress) {
		this.queryString = queryString;
		this.apiAddress = openApiAddress;
	}

	@Override
	public String toString() {
		return apiAddress.toString() + "?" + queryString;
	}

	public static class Builder {
		private final StringBuilder queryString = new StringBuilder();

		public Builder putQuery(String key, String value) {
			this.queryString.append(key).append("=").append(value).append("&");
			return this;
		}

		public ApiQuery build() {
			return new ApiQuery(this);
		}
	}
}
