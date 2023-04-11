package com.academic.amartek.services;

import java.util.List;

import com.academic.amartek.dto.CurriculumVitaeDTO;
import com.academic.amartek.models.Education;

public interface EducationService {
    public List<Education> GetAll();
   // public Education GetbyUserId(String userId);
}
