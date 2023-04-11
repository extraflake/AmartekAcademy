package com.academic.amartek.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academic.amartek.dto.ResponseHandler;
import com.academic.amartek.dto.UserSkillRequestDTO;
import com.academic.amartek.models.Skill;
import com.academic.amartek.models.User;
import com.academic.amartek.models.UserSkill;
import com.academic.amartek.repositories.UserSkillRepository;

@CrossOrigin
@RestController
@RequestMapping("api")
public class UserSkillRestController {

    private UserSkillRepository userSkillRepository;

    @Autowired
    public UserSkillRestController(UserSkillRepository userSkillRepository) {
        this.userSkillRepository = userSkillRepository;
    }

    @GetMapping("cv/userskill/{userId}")
    public ResponseEntity<Object> getUserSkill(@PathVariable(required = true) String userId){
        return ResponseHandler.getResponse("Data Ditemukan", HttpStatus.OK, userSkillRepository.getUserSkill(userId));
    }
    
    @PostMapping("cv/userskill")
    public ResponseEntity<Object> saveUserSkill(@RequestBody UserSkillRequestDTO userSkillReq){
        User user = new User();
        user.setId(userSkillReq.getUser());
        Skill skill = new Skill();
        skill.setId(userSkillReq.getSkill());
        //Skill skill = skillRepository.getById(userSkillReq.getSkill());
        UserSkill userSkill = new UserSkill();
        userSkill.setUser(user);
        userSkill.setSkill(skill);
        userSkillRepository.save(userSkill);


            return ResponseHandler.generateResponse("Data Berhasil Disimpan", HttpStatus.OK);
        //return ResponseHandler.generateResponse("Data gagal Disimpan", HttpStatus.BAD_REQUEST);
    }
    @PutMapping("cv/userskill/{id}")
    public ResponseEntity<Object> editUserSkill(@PathVariable(required = true) Integer id, @RequestBody UserSkillRequestDTO userSkillReq){
        // User user = userRepository.getById(userSkillReq.getUser());
        // Skill skill = skillRepository.getById(userSkillReq.getSkill());
        User user = new User();
        user.setId(userSkillReq.getUser());
        Skill skill = new Skill();
        skill.setId(userSkillReq.getSkill());
        UserSkill userskill = new UserSkill();
        userskill.setId(id);
        userskill.setUser(user);
        userskill.setSkill(skill);
        userSkillRepository.save(userskill);
        return ResponseHandler.generateResponse("Data berhasil diubah", HttpStatus.OK);
    }
    @DeleteMapping("cv/userskill/{id}")
    public ResponseEntity<Object> deleteuserskill(@PathVariable(required = true) Integer id){
    // userSkillRepository.deleteUserSkill(id);
    userSkillRepository.deleteById(id);
    return ResponseHandler.generateResponse("Data Berhasil diHapus", HttpStatus.OK);
    }
}
