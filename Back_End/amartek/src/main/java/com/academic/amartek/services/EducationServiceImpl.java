package com.academic.amartek.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academic.amartek.dto.CurriculumVitaeDTO;
import com.academic.amartek.models.Education;
import com.academic.amartek.repositories.EducationRepository;

@Service
public class EducationServiceImpl implements EducationService{
    private EducationRepository educationRepository;
    
    @Autowired
    public EducationServiceImpl(EducationRepository educationRepository) {
        this.educationRepository = educationRepository;
    }

    @Override
    public List<Education> GetAll() {
      return educationRepository.findAll();
    }

  

    // @Override
    // public Education GetbyUserId(String userId) {
    //     return educationRepository.findByUserId(userId);
    // }

    
}
