package com.academic.amartek.dto;

import java.sql.Date;

public class ProjectRequestDTO {
    private String user, name, projectDesc;
    private Date projectStart, projectEnd;
    
    public String getUser() {
        return user;
    }
    public void setUser(String user) {
        this.user = user;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getProjectDesc() {
        return projectDesc;
    }
    public void setProjectDesc(String projectDesc) {
        this.projectDesc = projectDesc;
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
}
