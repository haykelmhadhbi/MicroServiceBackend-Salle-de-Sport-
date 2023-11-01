FROM openjdk:8
EXPOSE 8081
ADD target/candidaProject-0.0.1-SNAPSHOT.jar candidaProject-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","candidaProject-0.0.1-SNAPSHOT.jar","-web -webAllowOthers -tcp -tcpAllowOthers -browser"]