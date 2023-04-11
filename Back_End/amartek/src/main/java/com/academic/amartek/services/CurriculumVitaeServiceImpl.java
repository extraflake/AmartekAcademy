package com.academic.amartek.services;

import java.beans.JavaBean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.academic.amartek.dto.CurriculumVitaeDTO;
import com.academic.amartek.repositories.CurriculumVitaeRepository;

@Service
public class CurriculumVitaeServiceImpl implements CurriculumVitaeService{

    @Override
    public CurriculumVitaeDTO getCurriculumVitaeDTO(String userId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCurriculumVitaeDTO'");
        //return curriculumVitaeRepository.getCurriculumVitaeDTO(userId);
    }
    
    // @Autowired
    // private CurriculumVitaeRepository curriculumVitaeRepository;

    // @Autowired
    // public CurriculumVitaeServiceImpl(CurriculumVitaeRepository curriculumVitaeRepository) {
    //     this.curriculumVitaeRepository = curriculumVitaeRepository;
    // }

    
    
}
