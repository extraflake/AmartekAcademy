package com.academic.amartek.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "tb_tr_education")
public class Education {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn (name = "user_id")
    @JsonManagedReference
    private User user;

    @ManyToOne
    @JoinColumn (name = "degree_id")
    @JsonManagedReference
    private Degree degree;
    
    @ManyToOne
    @JoinColumn (name = "univ_id")
    @JsonManagedReference
    private Univ univ;

    @Column ( name = "gpa")
    private String gpa;

    @ManyToOne
    @JoinColumn (name = "major_id")
    @JsonManagedReference
    private Major major;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }    

    public Degree getDegree() {
        return degree;
    }

    public void setDegree(Degree degree) {
        this.degree = degree;
    }

    public Univ getUniv() {
        return univ;
    }

    public void setUniv(Univ univ) {
        this.univ = univ;
    }

    public String getGpa() {
        return gpa;
    }

    public void setGpa(String gpa) {
        this.gpa = gpa;
    }

    public Major getMajor() {
        return major;
    }

    public void setMajor(Major major) {
        this.major = major;
    }
    
}
