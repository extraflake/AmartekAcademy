package com.academic.amartek.services;

import java.util.List;

import com.academic.amartek.models.Job;

public interface JobService {
    public List<Job> Get(); 
    public Job Get(Integer id); 
    public Boolean Save(Job job); 
    public Boolean Delete(Integer id); 
}
