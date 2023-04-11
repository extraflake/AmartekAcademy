package com.academic.amartek.services;

import java.util.List;

import com.academic.amartek.models.Recruitment;

public interface RecruitmentService {
    public List<Recruitment> Get(); 
    public Recruitment Get(Integer id); 
    public Boolean Save(Recruitment job); 
}
