package com.academic.amartek.models;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="tb_m_skill")
public class Skill {
    @Id    
    @GeneratedValue (strategy = GenerationType.IDENTITY) 
    private Integer id;

    @Column(name = "skill_name")
    private String skillName;

    // penghubung ke FK
    @OneToMany(mappedBy = "skill")
    @JsonBackReference
    public Set<UserSkill> userSkill;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }

    public Set<UserSkill> getUserSkill() {
        return userSkill;
    }

    public void setUserSkill(Set<UserSkill> userSkill) {
        this.userSkill = userSkill;
    }
}
