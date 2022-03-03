package com.companionnuri.nuri.map.repository;

import java.util.List;
import java.util.Optional;

import com.companionnuri.nuri.map.domain.PetStore;

public interface PetStoreRepository {
	void save(PetStore petStore);

	Optional<PetStore> findById(Long id);

	Optional<PetStore> findByName(String name);

	List<PetStore> findAll();
}
