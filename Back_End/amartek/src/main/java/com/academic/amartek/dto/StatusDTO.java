package com.academic.amartek.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class StatusDTO {
    public String statusHr;
    @JsonFormat(pattern = "yyyy-MM-dd")
    public Date dateInterviewHr; 

    public String statusTrainer;
    @JsonFormat(pattern = "yyyy-MM-dd")
    public Date dateInterviewTrainer; 

    public String hr_id;
    public String trainer_id;
}
