package com.academic.amartek.dto;

import java.sql.Date;

public class BiodataRequestDTO {
    private String user, fullname, address, summary;
    private Long noTelp;
    private Date dateBirth;
    
    public String getUser() {
        return user;
    }
    public void setUser(String user) {
        this.user = user;
    }
    public String getFullname() {
        return fullname;
    }
    public void setFullname(String fullname) {
        this.fullname = fullname;
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
    public Long getNoTelp() {
        return noTelp;
    }
    public void setNoTelp(Long noTelp) {
        this.noTelp = noTelp;
    }
    public Date getDateBirth() {
        return dateBirth;
    }
    public void setDateBirth(Date dateBirth) {
        this.dateBirth = dateBirth;
    }
}
