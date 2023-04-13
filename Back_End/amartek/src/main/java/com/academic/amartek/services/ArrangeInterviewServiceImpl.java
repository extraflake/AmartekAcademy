package com.academic.amartek.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academic.amartek.models.Recruitment;
import com.academic.amartek.models.User;
import com.academic.amartek.repositories.ArrangeInterviewRepository;
import com.academic.amartek.repositories.UserRepository;


/**
 * ArrangeInterviewServiceImpl
 */
@Service
public class ArrangeInterviewServiceImpl implements ArrangeInterviewService{
    @Autowired
    private ArrangeInterviewRepository iArrangeInterviewRepository;
    private UserRepository userRepository;

    public ArrangeInterviewServiceImpl(ArrangeInterviewRepository iArrangeInterviewRepository, UserRepository userRepository){
        this.iArrangeInterviewRepository = iArrangeInterviewRepository;
        this.userRepository = userRepository;
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

    @Override
    public List<User> getAllUsersx() {
        List<User> Users = userRepository.findAll();
        return Users;
    }
    
}