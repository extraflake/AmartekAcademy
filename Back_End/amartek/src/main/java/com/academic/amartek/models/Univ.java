package com.academic.amartek.models;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "tb_m_univ")
public class Univ {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name = "univ_name")
    private String univName;

    @OneToMany(mappedBy = "univ")
    @JsonBackReference
    private Set<Education> education;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUnivName() {
        return univName;
    }

    public void setUnivName(String univName) {
        this.univName = univName;
    }

    public Set<Education> getEducation() {
        return education;
    }

    public void setEducation(Set<Education> education) {
        this.education = education;
    }
}
