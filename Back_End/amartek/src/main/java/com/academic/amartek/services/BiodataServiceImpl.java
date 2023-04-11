package com.academic.amartek.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academic.amartek.models.Biodata;
import com.academic.amartek.repositories.BiodataRepository;

@Service
public class BiodataServiceImpl implements BiodataService{
    @Autowired
    private BiodataRepository biodataRepository;

    @Override
    public Biodata getid(String id) {
        
       return biodataRepository.findById(id).orElseThrow(() -> new IllegalStateException("data not found"));
    }
    
}
