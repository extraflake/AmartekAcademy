package com.academic.amartek.models;

import java.sql.Date;

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
@Table (name ="tb_m_project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonManagedReference
    private User user;    

    @Column(name ="name")
    private String name;

    @Column(name = "project_start")
    private Date project_start;

    @Column(name = "project_end")
    private Date project_end;

    @Column(name = "project_desc")
    private String project_desc;


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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getProject_start() {
        return project_start;
    }

    public void setProject_start(Date project_start) {
        this.project_start = project_start;
    }

    public Date getProject_end() {
        return project_end;
    }

    public void setProject_end(Date project_end) {
        this.project_end = project_end;
    }

    public String getProject_desc() {
        return project_desc;
    }

    public void setProject_desc(String project_desc) {
        this.project_desc = project_desc;
    }
    
}
