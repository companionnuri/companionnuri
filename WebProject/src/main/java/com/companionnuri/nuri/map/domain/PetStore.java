package com.companionnuri.nuri.map.domain;

import static lombok.AccessLevel.*;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = PROTECTED)
@EqualsAndHashCode
public class PetStore {

	@Id
	@GeneratedValue
	@Column(name = "pet_store_id")
	private Long id;

	private String name;

	private StoreCategory category;

	@Embedded
	private Address address;

	private PetStore(Builder builder) {
		name = builder.name;
		category = builder.category;
		address = builder.address;
	}

	public static class Builder {
		private String name;
		private StoreCategory category;
		private Address address;

		public Builder name(String name) {
			this.name = name;
			return this;
		}

		public Builder category(StoreCategory category) {
			this.category = category;
			return this;
		}

		public Builder address(Address address) {
			this.address = address;
			return this;
		}

		public PetStore build() {
			return new PetStore(this);
		}
	}
}
