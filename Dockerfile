FROM openjdk:8
ARG JAR_FILE=./WebProject/target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
