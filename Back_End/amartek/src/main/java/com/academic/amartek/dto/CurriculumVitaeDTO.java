package com.academic.amartek.dto;

import java.sql.Date;

public class CurriculumVitaeDTO {
    private String userId;
    private String email;
    private String bId;
    private String fullname;
    private Date birthDate;
    private Integer noTelp;
    private String address;
    private String summary;
    private String skillName;
    private String projectName;
    private Date projectStart;
    private Date projectEnd;
    private String projectDesc;
    private String degreeName;
    private String univName;
    private String majorName;
    private String gpa;
    private Integer skillId, majorId, univId, degreeId;
    
    public Integer getSkillId() {
        return skillId;
    }
    public void setSkillId(Integer skillId) {
        this.skillId = skillId;
    }
    public Integer getMajorId() {
        return majorId;
    }
    public void setMajorId(Integer majorId) {
        this.majorId = majorId;
    }
    public Integer getUnivId() {
        return univId;
    }
    public void setUnivId(Integer univId) {
        this.univId = univId;
    }
    public Integer getDegreeId() {
        return degreeId;
    }
    public void setDegreeId(Integer degreeId) {
        this.degreeId = degreeId;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getbId() {
        return bId;
    }
    public void setbId(String bId) {
        this.bId = bId;
    }
    public String getFullname() {
        return fullname;
    }
    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
    public Date getBirthDate() {
        return birthDate;
    }
    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
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
    public String getSkillName() {
        return skillName;
    }
    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }
    public String getProjectName() {
        return projectName;
    }
    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }
    public Date getProjectStart() {
        return projectStart;
    }
    public void setProjectStart(Date projectStart) {
        this.projectStart = projectStart;
    }
    public Date getProjectEnd() {
        return projectEnd;
    }
    public void setProjectEnd(Date projectEnd) {
        this.projectEnd = projectEnd;
    }
    public String getProjectDesc() {
        return projectDesc;
    }
    public void setProjectDesc(String projectDesc) {
        this.projectDesc = projectDesc;
    }
    public String getDegreeName() {
        return degreeName;
    }
    public void setDegreeName(String degreeName) {
        this.degreeName = degreeName;
    }
    public String getUnivName() {
        return univName;
    }
    public void setUnivName(String univName) {
        this.univName = univName;
    }
    public String getMajorName() {
        return majorName;
    }
    public void setMajorName(String majorName) {
        this.majorName = majorName;
    }
    public String getGpa() {
        return gpa;
    }
    public void setGpa(String gpa) {
        this.gpa = gpa;
    }

}