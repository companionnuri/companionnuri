package com.companionnuri.nuri.map.domain;

import static lombok.AccessLevel.*;

import java.util.Objects;

import javax.persistence.Embeddable;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Getter
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

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		Address address = (Address)o;
		return Objects.equals(getStreet(), address.getStreet()) && Objects.equals(this.getFloor(),
			address.getFloor());
	}

	@Override
	public int hashCode() {
		return Objects.hash(getStreet(), this.getFloor());
	}
}
