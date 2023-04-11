package com.academic.amartek.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academic.amartek.models.UserSkill;
import com.academic.amartek.repositories.UserSkillRepository;

@Service
public class UserSkillServiceImpl implements UserSkillService {
    private UserSkillRepository userSkillRepository;

    @Autowired
    public UserSkillServiceImpl (UserSkillRepository userSkillRepository){
    
       this.userSkillRepository = userSkillRepository; 
    }
    @Override
    public UserSkill Get(Integer id) {
      return userSkillRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Data Tidak Ditemukan"));
    
    }
    @Override
    public Boolean save(UserSkill userSkill) {
       userSkillRepository.save(userSkill);
       return userSkillRepository.findById(userSkill.getId()).isPresent();
    }
    
}
