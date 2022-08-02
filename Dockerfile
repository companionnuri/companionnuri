FROM openjdk:8
ARG JAR_FILE=/home/runner/work/companionnuri/companionnuri/target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
