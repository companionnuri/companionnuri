package com.companionnuri.nuri.map.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.companionnuri.nuri.map.domain.Address;
import com.companionnuri.nuri.map.domain.PetStore;
import com.companionnuri.nuri.map.domain.StoreCategory;
import com.companionnuri.nuri.map.repository.PetStoreRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PetStoreServiceImpl implements PetStoreService{

	private final PetStoreRepository petStoreRepository;

	@Transactional
	@Override
	public void savePetStore(PetStore petStore) {
		petStoreRepository.save(petStore);
	}

	@Override
	public List<PetStore> searchStores(String name) {
		return petStoreRepository.findByName(name);
	}

	@Override
	public List<PetStore> searchStores(Address address) {
		// TODO
		return null;
	}

	@Override
	public List<PetStore> searchStores(StoreCategory category) {
		// TODO
		return null;
	}
}
