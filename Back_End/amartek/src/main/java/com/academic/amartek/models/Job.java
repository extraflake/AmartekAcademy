package com.academic.amartek.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="tb_m_job")
public class Job {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY) 
    private Integer id;

    @Column(name = "title_job")
    private String titleJob;

    @Column(name = "location")
    private String location;

    @Column(name = "open_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date openDate;

    @Column(name = "close_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date closeDate;

    @Column(name = "job_desc")
    private String jobDesc;

    @Column(name = "job_require")
    private String jobRequire;

    @Column(name = "job_benefit")
    private String jobBenefit;

    // penghubung ke FK    
    @OneToOne (mappedBy = "job", fetch = FetchType.LAZY)       
    @JsonBackReference
    public Recruitment recruitment;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitleJob() {
        return titleJob;
    }

    public void setTitleJob(String titleJob) {
        this.titleJob = titleJob;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getOpenDate() {
        return openDate;
    }

    public void setOpenDate(Date openDate) {
        this.openDate = openDate;
    }

    public Date getCloseDate() {
        return closeDate;
    }

    public void setCloseDate(Date closeDate) {
        this.closeDate = closeDate;
    }

    public String getJobDesc() {
        return jobDesc;
    }

    public void setJobDesc(String jobDesc) {
        this.jobDesc = jobDesc;
    }

    public String getJobRequire() {
        return jobRequire;
    }

    public void setJobRequire(String jobRequire) {
        this.jobRequire = jobRequire;
    }

    public String getJobBenefit() {
        return jobBenefit;
    }

    public void setJobBenefit(String jobBenefit) {
        this.jobBenefit = jobBenefit;
    }

    public Recruitment getRecruitment() {
        return recruitment;
    }

    public void setRecruitment(Recruitment recruitment) {
        this.recruitment = recruitment;
    }

}
