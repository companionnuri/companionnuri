package com.companionnuri.nuri.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@MapperScan(basePackages = "com.companionnuri.nuri.model.mapper")
public class DatabaseConfig {
}
