package com.academic.amartek.services;

import java.util.List;

import com.academic.amartek.models.Recruitment;
import com.academic.amartek.models.User;


public interface ArrangeInterviewService {
    
    public List<Recruitment> GetAll();
    public Recruitment Get(Integer id);
    public Boolean Save (Recruitment recruitment);
    public List<User>getAllUsersx();
    // public Boolean  Delete(Integer id);
}
