package com.companionnuri.nuri.map.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.companionnuri.nuri.map.domain.PetStore;

public interface PetStoreRepository extends JpaRepository<PetStore, Long> {
}
