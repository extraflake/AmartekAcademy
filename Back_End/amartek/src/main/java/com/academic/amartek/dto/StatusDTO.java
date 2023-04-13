package com.academic.amartek.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class StatusDTO {
    public String statusHr;

    public Date dateInterviewHr; 

    public String statusTrainer;

    public Date dateInterviewTrainer; 

    public String hr_id;
    public String trainer_id;
    public String url;
}
