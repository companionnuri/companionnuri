package com.companionnuri.nuri.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

import java.util.Arrays;

@Aspect
@Component
@Slf4j
public class LoggingAspect {

    @Pointcut("execution(public * com.companionnuri.nuri.model.service..*(..))")
    private void publicServiceMethods() {
    }

    @Around("publicServiceMethods()")
    public Object serviceMethodPerformanceAdvice(ProceedingJoinPoint pjp) throws Throwable {
        StopWatch sw = new StopWatch();
        sw.start();
        Object result = pjp.proceed();
        sw.stop();
        log.info("[COMPLETED in] {} ms", sw.getLastTaskTimeMillis());
        return result;
    }

    @Before("publicServiceMethods()")
    public void serviceMethodLoggingAdvice(JoinPoint joinPoint) {
        log.info("[METHOD call] {}", joinPoint.getSignature().toShortString());
        log.info("[PARAMETERS] {}", Arrays.toString(joinPoint.getArgs()));
    }
}
