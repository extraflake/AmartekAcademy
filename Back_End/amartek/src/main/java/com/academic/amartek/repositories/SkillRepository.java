package com.academic.amartek.repositories;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.academic.amartek.models.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Integer>{

    @Query(value = "SELECT * FROM tb_m_skill", nativeQuery = true)
    public List<Map<String, Object>> getSkill();

}
