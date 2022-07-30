package com.companionnuri.nuri.aop;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

import java.util.Arrays;

@Aspect
@Component
@Slf4j
public class LoggingAspect {

    private final ObjectMapper objectMapper = new ObjectMapper();


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

//    @AfterReturning(value = "publicServiceMethods()", returning = "returnValue")
//    public void serviceMethodResultAdvice(Object returnValue) {
//        try {
//            log.info("[RESULT json] \n {} \n ========================================================================", objectMapper
//                    .writerWithDefaultPrettyPrinter()
//                    .writeValueAsString(returnValue).substring(0,300));
//        } catch (JsonProcessingException e) {
//            log.error("[JSON ERROR]");
//        }
//    }

    @AfterThrowing(value = "publicServiceMethods()", throwing = "exception")
    public void serviceMethodExceptionAdvice(Exception exception) {
        log.error("[ERROR] {}", exception.toString());
    }
}
