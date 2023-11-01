package com.candidat.microservice.candidaproject;



import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Candidat implements Serializable {
    private static final long serialVersionUID=6;
    @Id
    @GeneratedValue
    private int id;
    private String nom;
    private String prenom;
    private String email;

}
