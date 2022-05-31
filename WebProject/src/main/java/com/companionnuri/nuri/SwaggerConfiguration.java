package com.companionnuri.nuri;

import java.util.HashSet;
import java.util.Set;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SwaggerConfiguration {

	private final String VERSION = "V1";
	private final String TITLE = "COMPANION API " + VERSION;

	@Bean
	public Docket docket() {
		return new Docket(DocumentationType.OAS_30).consumes(getConsumeContentTypes()).produces(getProduceContentTypes())
			.apiInfo(apiInfo()).groupName(VERSION)
			.select()
			.apis(RequestHandlerSelectors.basePackage("com.companionnuri.nuri.map.api"))
			.paths(PathSelectors.any())
			.build()
			.useDefaultResponseMessages(false);
	}

	private Set<String> getConsumeContentTypes() {
		Set<String> consumes = new HashSet<>();
		consumes.add("application/json;charset=UTF-8");
		consumes.add("application/x-www-form-urlencoded");
		return consumes;
	}

	private Set<String> getProduceContentTypes() {
		Set<String> produces = new HashSet<>();
		produces.add("application/json;charset=UTF-8");
		return produces;
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title(TITLE)
			.version("1.0").build();
	}
}
