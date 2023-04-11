package com.academic.amartek.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academic.amartek.dto.ResponseHandler;
import com.academic.amartek.models.Skill;
import com.academic.amartek.repositories.SkillRepository;

@CrossOrigin
@RestController
@RequestMapping("api")
public class SkillRestController {
    private SkillRepository skillRepository;

    @Autowired
    public SkillRestController(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    @GetMapping("cv/skill")
    public ResponseEntity<Object> GetSkill(){
        return ResponseHandler.getResponse("Data Ditemukan", HttpStatus.OK, skillRepository.getSkill());
    }
    @PostMapping("cv/skill")
    public ResponseEntity<Object> saveSkill(@RequestBody Skill skillreq){
        Skill skill = new Skill();
        skill.setSkillName(skillreq.getSkillName());
        skillRepository.save(skill);
        return ResponseHandler.generateResponse("Data Berhasil Disimpan", HttpStatus.OK);
    }
    @PostMapping("cv/skill/{id}")
    public ResponseEntity<Object> saveSkill(@RequestBody Skill skillreq, @PathVariable(required = true) Integer id){
        Skill skill = new Skill();
        skill.setId(id);
        skill.setSkillName(skillreq.getSkillName());
        skillRepository.save(skill);
        return ResponseHandler.generateResponse("Data Berhasil Di", HttpStatus.OK);
    }
    @DeleteMapping("cv/skill/{id}")
    public ResponseEntity<Object> deleteBiodata(@PathVariable(required = true) Integer id){
    //biodataRepository.deleteBiodata(userId);
    skillRepository.deleteById(id);
    return ResponseHandler.generateResponse("Data Berhasil diHapus", HttpStatus.OK);
    }
}
