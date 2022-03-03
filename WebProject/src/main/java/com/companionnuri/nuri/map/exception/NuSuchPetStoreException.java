package com.companionnuri.nuri.map.exception;

public class NuSuchPetStoreException extends RuntimeException{
	public NuSuchPetStoreException() {
		super();
	}

	public NuSuchPetStoreException(ExceptionMessage message) {
		super(message.toString());
	}

	public NuSuchPetStoreException(ExceptionMessage message, Throwable cause) {
		super(message.toString(), cause);
	}

	public NuSuchPetStoreException(Throwable cause) {
		super(cause);
	}
}
