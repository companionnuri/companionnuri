package com.companionnuri.nuri.map.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

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

	}

	@Test
	void searchStores() {
	}
}