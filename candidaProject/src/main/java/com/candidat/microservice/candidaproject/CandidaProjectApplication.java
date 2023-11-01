package com.candidat.microservice.candidaproject;

import javafx.application.Application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
public class CandidaProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(CandidaProjectApplication.class, args);
    }

    @Autowired
    private  CandidatRepository repository;

    @Bean
    ApplicationRunner init(){
        return (args) -> {
            //save
            repository.save(new Candidat(1,"Mariem","ch","m.esprit.tn"));
            repository.save(new Candidat(2,"baher","ammari","b.esprit.tn"));
            repository.save(new Candidat(3,"amani","hadda","a.esprit.tn"));
            //fetch
            repository.findAll().forEach(System.out::println);
        };
    }
}
