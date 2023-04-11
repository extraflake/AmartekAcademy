package com.academic.amartek.services;

import com.academic.amartek.models.UserSkill;

public interface UserSkillService {
    public UserSkill Get(Integer id);
    public Boolean save(UserSkill userSkill);
}
