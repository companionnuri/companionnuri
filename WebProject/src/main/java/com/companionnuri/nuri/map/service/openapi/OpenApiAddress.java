package com.companionnuri.nuri.map.service.openapi;

public enum OpenApiAddress {
	SEOUL_YONGSAN_API_URL(
		"https://api.odcloud.kr/api/3078039/v1/uddi:e4f997cd-64df-4810-8bf1-c075d744a379_201705111526",
		"seoulYongsanApiStrategy",
		2),
	KANGWON_COMPANION_ANIMAL_ADDRESS(
		"https://api.odcloud.kr/api/15096638/v1/uddi:718fc83f-ef5d-41b0-9290-afbe366ad802",
		"kangwonCompanionApiStrategy",
		32),
	SEOUL_GEUMCHEON_API_URL("https://api.odcloud.kr/api/3081145/v1/uddi:b7449123-06c9-49b6-babf-b401b1d14d95_201909150712",
		"seoulGeumcheonApiStrategy",
		1
	);

	private final String url;
	private final String beanName;
	private final int ratio;


	OpenApiAddress(String url, String beanName, int ratio) {
		this.url = url;
		this.beanName = beanName;
		this.ratio = ratio;
	}

	public String getBeanName() {
		return beanName;
	}

	public int getRatio() {
		return ratio;
	}

	@Override
	public String toString() {
		return url;
	}
}
