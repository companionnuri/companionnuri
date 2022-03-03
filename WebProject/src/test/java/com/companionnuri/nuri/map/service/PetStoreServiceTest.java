package com.companionnuri.nuri.map.service;

import static com.companionnuri.nuri.map.domain.StoreCategory.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import com.companionnuri.nuri.map.domain.Address;
import com.companionnuri.nuri.map.domain.PetStore;
import com.companionnuri.nuri.map.repository.PetStoreRepository;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@Transactional
class PetStoreServiceTest {

	@Autowired
	PetStoreService petStoreService;

	@Autowired
	PetStoreRepository petStoreRepository;

	@Test
	@DisplayName("가게 저장 테스트")
	void savePetStore() {
		Address address = new Address.Builder().street("신림로 1길").zipcode("4층").build();
		PetStore petStore = new PetStore.Builder().name("누리").address(address).category(CAFE).build();

		Long savedId = petStoreService.savePetStore(petStore);

		assertEquals(petStore, petStoreRepository.findById(savedId).orElseThrow(IllegalStateException::new));
	}

	@Test
	void searchStores() {
	}
}