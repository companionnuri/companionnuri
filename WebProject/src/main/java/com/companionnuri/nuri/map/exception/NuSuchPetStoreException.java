package com.companionnuri.nuri.map.exception;

import static com.companionnuri.nuri.map.exception.ExceptionMessage.*;

public class NuSuchPetStoreException extends RuntimeException{
	public NuSuchPetStoreException() {
		super(NO_SUCH_PET_STORE_EXCEPTION_MESSAGE);
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
