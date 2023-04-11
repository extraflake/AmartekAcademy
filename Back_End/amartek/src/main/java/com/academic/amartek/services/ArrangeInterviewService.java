package com.academic.amartek.services;

import java.util.List;

import com.academic.amartek.models.Recruitment;


public interface ArrangeInterviewService {
    
    public List<Recruitment> GetAll();
    public Recruitment Get(Integer id);
    public Boolean Save (Recruitment recruitment);
    // public Boolean  Delete(Integer id);
}
