package com.academic.amartek.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academic.amartek.dto.ResponseHandler;
import com.academic.amartek.repositories.MajorRepository;

@CrossOrigin
@RestController
@RequestMapping("api")
public class MajorRestController {
    private MajorRepository majorRepository;

    @Autowired
    public MajorRestController(MajorRepository majorRepository) {
        this.majorRepository = majorRepository;
    }

    @GetMapping("cv/major")
    public ResponseEntity<Object> GetMajor(){
        return ResponseHandler.getResponse("Data Ditemukan", HttpStatus.OK, majorRepository.GetMajor());
    }    
}
