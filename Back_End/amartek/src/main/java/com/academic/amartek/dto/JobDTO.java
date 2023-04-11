package com.academic.amartek.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class JobDTO {
    public Integer id;
    public String titleJob;
    public String location;
    @JsonFormat(pattern = "yyyy-MM-dd")
    public Date openDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    public Date closeDate;
    public String jobDesc;
    public String jobRequire;
    public String jobBenefit;
}
