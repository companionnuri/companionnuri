package com.companionnuri.nuri.map.repository;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.companionnuri.nuri.map.domain.PetStore;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class PetStoreRepositoryImpl implements PetStoreRepository {

	private final EntityManager em;

	@Override
	public void save(PetStore petStore) {
		em.persist(petStore);
	}

	@Override
	public Optional<PetStore> findById(Long id) {
		return Optional.ofNullable(em.find(PetStore.class, id));
	}

	@Override
	public List<PetStore> findByName(String name) {
		return em.createQuery("select  p from PetStore p where p.name =:name", PetStore.class)
			.setParameter("name", name)
			.getResultList();
	}

	@Override
	public List<PetStore> findAll() {
		return em.createQuery("select p from PetStore p", PetStore.class)
			.getResultList();
	}
}
