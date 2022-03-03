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
	private String zipcode;

	private Address(Builder builder) {
		street = builder.street;
		zipcode = builder.zipcode;
	}

	public static class Builder {
		private String street;
		private String zipcode;

		public Builder street(String street) {
			this.street = street;
			return this;
		}

		public Builder zipcode(String zipcode) {
			this.zipcode = zipcode;
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
		return Objects.equals(getStreet(), address.getStreet()) && Objects.equals(getZipcode(),
			address.getZipcode());
	}

	@Override
	public int hashCode() {
		return Objects.hash(getStreet(), getZipcode());
	}
}
