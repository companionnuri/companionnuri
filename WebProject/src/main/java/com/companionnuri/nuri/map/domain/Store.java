package com.companionnuri.nuri.map.domain;

import lombok.Getter;

@Getter
public class Store {

	private final String name;
	private final String category;
	private final String street;
	private final String latitude;
	private final String longitude;

	private Store(Builder builder) {
		name = builder.name;
		category = builder.category;
		street = builder.street;
		latitude = builder.latitude;
		longitude = builder.longitude;
	}

	public static class Builder {
		private String name;
		private String category;
		private String street;
		private String latitude;
		private String longitude;

		public Builder name(String name) {
			this.name = name;
			return this;
		}

		public Builder category(String category) {
			this.category = category;
			return this;
		}

		public Builder street(String street) {
			this.street = street;
			return this;
		}

		public Builder latitude(String latitude) {
			this.latitude = latitude;
			return this;
		}

		public Builder longitude(String longitude) {
			this.longitude = longitude;
			return this;
		}

		public Store build() {
			return new Store(this);
		}

	}
}
