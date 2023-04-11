package com.academic.amartek.dto;

public class EducationRequestDTO {
    private String gpa, user;
    private Integer degreeId, univId, majorId;

    public String getGpa() {
        return gpa;
    }
    public void setGpa(String gpa) {
        this.gpa = gpa;
    }
    public String getUser() {
        return user;
    }
    public void setUser(String user) {
        this.user = user;
    }
    public Integer getDegreeId() {
        return degreeId;
    }
    public void setDegreeId(Integer degreeId) {
        this.degreeId = degreeId;
    }
    public Integer getUnivId() {
        return univId;
    }
    public void setUnivId(Integer univId) {
        this.univId = univId;
    }
    public Integer getMajorId() {
        return majorId;
    }
    public void setMajorId(Integer majorId) {
        this.majorId = majorId;
    }

}
