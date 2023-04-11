package com.academic.amartek.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academic.amartek.dto.ResponseHandler;
import com.academic.amartek.repositories.DegreeRepository;

@CrossOrigin
@RestController
@RequestMapping("api")
public class DegreeRestController {
    private DegreeRepository degreeRepository;
    
    @Autowired
    public DegreeRestController(DegreeRepository degreeRepository) {
        this.degreeRepository = degreeRepository;
    }


    @GetMapping("cv/degree")
    public ResponseEntity<Object> GetDegree(){
        return ResponseHandler.getResponse("Data Ditemukan", HttpStatus.OK, degreeRepository.GetDegree());
    }
    
}
