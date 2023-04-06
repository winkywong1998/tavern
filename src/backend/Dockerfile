FROM maven:3.8.6 AS maven
WORKDIR /backend/app
COPY . /backend/app
RUN mvn clean package

FROM openjdk:8-jdk-alpine
ARG JAR_FILE=ling-1.0.0-alpha.jar
WORKDIR /app
COPY --from=maven /backend/app/target/${JAR_FILE} /app
EXPOSE 80
CMD ["java","-jar","ling-1.0.0-alpha.jar"]