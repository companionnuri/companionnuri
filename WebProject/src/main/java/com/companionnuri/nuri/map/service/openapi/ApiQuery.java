package com.companionnuri.nuri.map.service.openapi;

import lombok.Getter;

@Getter
public class ApiQuery {

	private final String OPEN_KEY = "lA29%2FannvhdQHnNE4mon7ZoyNq0ue6P%2FPnYQuFsfaZ7D8YedR6DOISotomyacj0u15iLaCeruqZUsGe%2F79DpRA%3D%3D";
	private final StringBuilder queryString;
	private OpenApiAddress apiAddress;
	private int ratio;
	private int perPage = 35;

	private ApiQuery(Builder builder) {
		queryString = builder.queryString.append("serviceKey=").append(OPEN_KEY);
		perPage = builder.value;
	}

	public ApiQuery(StringBuilder queryString, OpenApiAddress openApiAddress) {
		this.queryString = queryString;
		this.apiAddress = openApiAddress;
		this.ratio = openApiAddress.getRatio();
	}

	public String getBeanName() {
		return apiAddress.getBeanName();
	}

	public String getUrl() {
		return apiAddress.toString() + "?" + queryString.toString() + "&perPage=" + (perPage * ratio / 35);
	}

	@Override
	public String toString() {
		return apiAddress.toString() + "?" + queryString;
	}

	public static class Builder {
		private final StringBuilder queryString = new StringBuilder();
		private int value = 35;

		public Builder putQuery(String key, String value) {
			if (key.equals("perPage")) {
				this.value = Integer.parseInt(value);
				return this;
			}

			this.queryString.append(key).append("=").append(value).append("&");
			return this;
		}

		public ApiQuery build() {
			return new ApiQuery(this);
		}
	}

}
