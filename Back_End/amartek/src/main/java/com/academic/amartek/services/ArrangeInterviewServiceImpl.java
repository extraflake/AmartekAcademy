package com.academic.amartek.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academic.amartek.models.Recruitment;
import com.academic.amartek.repositories.ArrangeInterviewRepository;


/**
 * ArrangeInterviewServiceImpl
 */
@Service
public class ArrangeInterviewServiceImpl implements ArrangeInterviewService{
    @Autowired
    private ArrangeInterviewRepository iArrangeInterviewRepository;

    public ArrangeInterviewServiceImpl(ArrangeInterviewRepository iArrangeInterviewRepository){
        this.iArrangeInterviewRepository = iArrangeInterviewRepository;
    }

    @Override
    public List<Recruitment> GetAll() {
        List<Recruitment> recruitments = iArrangeInterviewRepository.findAll();
              
            return recruitments;
    }

    @Override
    public Recruitment Get(Integer id) {
        return iArrangeInterviewRepository.findById(id).orElseThrow(() -> new IllegalStateException("data not found"));
    }

    @Override
    public Boolean Save(Recruitment recruitment) {
        iArrangeInterviewRepository.save(recruitment);
        return iArrangeInterviewRepository.findById(recruitment.getId()).isPresent();
    }
    
}