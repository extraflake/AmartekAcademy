package com.academic.amartek.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="tb_tr_recruitment")
public class Recruitment {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name="applicant_id")  
    @JsonManagedReference   
    private User applicant;

    @OneToOne
    @JoinColumn(name="hr_id")   
    @JsonManagedReference  
    private User hr;

    @OneToOne
    @JoinColumn(name="trainer_id")  
    @JsonManagedReference   
    private User trainer;

    @OneToOne()
    @JoinColumn(name="job_id")    
    @JsonManagedReference 
    private Job job;

    @Column(name="date_interview_trainer")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date dateInterviewTrainer;

    @Column(name="status_trainer")
    private String statusTrainer;
  
    @Column(name="date_interview_hr")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date dateInterviewHr;
  
    @Column(name = "status_hr")
    private String statusHr;
    
    @Column(name = "status_applicant")
    private String statusApplicant;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getApplicant() {
        return applicant;
    }

    public void setApplicant(User applicant) {
        this.applicant = applicant;
    }

    public User getHr() {
        return hr;
    }

    public void setHr(User hr) {
        this.hr = hr;
    }

    public User getTrainer() {
        return trainer;
    }

    public void setTrainer(User trainer) {
        this.trainer = trainer;
    }

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }

    public Date getDateInterviewTrainer() {
        return dateInterviewTrainer;
    }

    public void setDateInterviewTrainer(Date dateInterviewTrainer) {
        this.dateInterviewTrainer = dateInterviewTrainer;
    }

    public String getStatusTrainer() {
        return statusTrainer;
    }

    public void setStatusTrainer(String statusTrainer) {
        this.statusTrainer = statusTrainer;
    }

    public Date getDateInterviewHr() {
        return dateInterviewHr;
    }

    public void setDateInterviewHr(Date dateInterviewHr) {
        this.dateInterviewHr = dateInterviewHr;
    }

    public String getStatusHr() {
        return statusHr;
    }

    public void setStatusHr(String statusHr) {
        this.statusHr = statusHr;
    }

    public String getStatusApplicant() {
        return statusApplicant;
    }

    public void setStatusApplicant(String statusApplicant) {
        this.statusApplicant = statusApplicant;
    }

}
