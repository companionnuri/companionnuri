package com.companionnuri.nuri.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
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
    public Object serviceMethodLoggingAdvice(ProceedingJoinPoint pjp) throws Throwable {
        StopWatch sw = new StopWatch();
        sw.start();
        log.info("[METHOD call] {}", pjp.getSignature().toShortString());
        log.info("[Parameters] {}", Arrays.toString(pjp.getArgs()));
        Object result = pjp.proceed();
        sw.stop();
        log.info("[Completed in] {} ms", sw.getLastTaskTimeMillis());
        return result;
    }
}
