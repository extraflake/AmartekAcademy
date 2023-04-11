package com.academic.amartek.models;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "tb_m_biodata")
public class Biodata {
    // @Id
    // @Column(name="id")
    // private String id;

    // @OneToOne
    // @JsonIgnore
    // @JoinColumn(name="id", nullable = false)
    // private User user;
    @Id
    @Column(name="id")
    private String id;

    @OneToOne
    @JoinColumn(name="id")
    @JsonManagedReference
    private User user;

    @Column(name = "fullname")
    private String fullname;
    
    @Column(name = "birth_date")
    private Date datebirth;

    @Column(name = "no_telp")
    private Integer noTelp;

    @Column(name = "address")
    private String address;

    @Column(name = "summary")
    private String summary;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public Date getDatebirth() {
        return datebirth;
    }

    public void setDatebirth(Date datebirth) {
        this.datebirth = datebirth;
    }

    public Integer getNoTelp() {
        return noTelp;
    }

    public void setNoTelp(Integer noTelp) {
        this.noTelp = noTelp;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }
    
}