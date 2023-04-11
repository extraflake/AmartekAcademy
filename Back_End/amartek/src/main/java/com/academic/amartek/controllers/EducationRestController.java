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

import com.academic.amartek.dto.EducationRequestDTO;
import com.academic.amartek.dto.ResponseHandler;
import com.academic.amartek.models.Degree;
import com.academic.amartek.models.Education;
import com.academic.amartek.models.Major;
import com.academic.amartek.models.Univ;
import com.academic.amartek.models.User;
import com.academic.amartek.repositories.EducationRepository;

@CrossOrigin()
@RestController
@RequestMapping("api")
public class EducationRestController {

    private EducationRepository educationRepository;

    @Autowired
    public EducationRestController(EducationRepository educationRepository) {
        this.educationRepository = educationRepository;
    }

    @GetMapping("cv/education/{userId}")
    public ResponseEntity<Object> getEducation(@PathVariable(required = true) String userId){
        return ResponseHandler.getResponse("Data Ditemukan", HttpStatus.OK, educationRepository.getEducations(userId));
    }
    @PostMapping("cv/education")
    public ResponseEntity<Object> saveEducation(@RequestBody EducationRequestDTO educationRequestDTO){
        // User user = userRepository.getById(educationRequestDTO.getUser());
        // Degree degree = degreeRepository.getById(educationRequestDTO.getDegreeId());
        // Univ univ = univRepository.getById(educationRequestDTO.getUnivId());
        // Major major = majorRepository.getById(educationRequestDTO.getMajorId());
        User user = new User();
        user.setId(educationRequestDTO.getUser());
        Degree degree = new Degree();
        degree.setId(educationRequestDTO.getDegreeId());
        Univ univ = new Univ();
        univ.setId(educationRequestDTO.getUnivId());
        Major major = new Major();
        major.setId(educationRequestDTO.getMajorId());
        Education education = new Education();
        education.setUser(user);
        education.setDegree(degree);
        education.setUniv(univ);
        education.setGpa(educationRequestDTO.getGpa());
        education.setMajor(major);
        educationRepository.save(education);

        return ResponseHandler.generateResponse("Data Berhasil Disimpan", HttpStatus.OK);
    }
    @PutMapping("cv/education/{id}")
    public ResponseEntity<Object> editEducation(@PathVariable(required = true) Integer id, @RequestBody EducationRequestDTO educationRequestDTO){
        // User user = userRepository.getById(educationRequestDTO.getUser());
        // Degree degree = degreeRepository.getById(educationRequestDTO.getDegreeId());
        // Univ univ = univRepository.getById(educationRequestDTO.getUnivId());
        // Major major = majorRepository.getById(educationRequestDTO.getMajorId());
        User user = new User();
        user.setId(educationRequestDTO.getUser());
        Degree degree = new Degree();
        degree.setId(educationRequestDTO.getDegreeId());
        Univ univ = new Univ();
        univ.setId(educationRequestDTO.getUnivId());
        Major major = new Major();
        major.setId(educationRequestDTO.getMajorId());
        Education education = new Education();
        education.setId(id);
        education.setUser(user);
        education.setDegree(degree);
        education.setUniv(univ);
        education.setGpa(educationRequestDTO.getGpa());
        education.setMajor(major);
        educationRepository.save(education);

        return ResponseHandler.generateResponse("Data Berhasil Diubah", HttpStatus.OK);
    }
    @DeleteMapping("cv/education/{id}")
    public ResponseEntity<Object> deleteEducation(@PathVariable(required = true) Integer id){
    //educationRepository.deleteEducation(id);
    educationRepository.deleteById(id);
    return ResponseHandler.generateResponse("Data Berhasil diHapus", HttpStatus.OK);
    }






    
}
