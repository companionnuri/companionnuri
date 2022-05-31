package com.companionnuri.nuri.map.domain;

import static lombok.AccessLevel.*;

import javax.persistence.Embeddable;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Getter
@EqualsAndHashCode
@NoArgsConstructor(access = PROTECTED)
public class Address {
	private String street;
	private String floor;

	private Address(Builder builder) {
		street = builder.street;
		floor = builder.floor;
	}

	public static class Builder {
		private String street;
		private String floor;

		public Builder street(String street) {
			this.street = street;
			return this;
		}

		public Builder zipcode(String floor) {
			this.floor = floor;
			return this;
		}

		public Address build() {
			return new Address(this);
		}
	}
}
