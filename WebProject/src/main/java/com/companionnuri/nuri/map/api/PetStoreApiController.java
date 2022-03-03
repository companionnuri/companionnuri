package com.companionnuri.nuri.map.api;

import org.springframework.web.bind.annotation.RestController;

import com.companionnuri.nuri.map.service.PetStoreService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class PetStoreApiController {

	private final PetStoreService petStoreService;

}
