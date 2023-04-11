package com.academic.amartek.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academic.amartek.dto.ResponseHandler;
import com.academic.amartek.repositories.UnivRepository;

@CrossOrigin
@RestController
@RequestMapping("api")
public class UnivesityRestController {
    
    private UnivRepository univRepository;

    @Autowired
    public UnivesityRestController(UnivRepository univRepository) {
        this.univRepository = univRepository;
    }

    @GetMapping("cv/univ")
    public ResponseEntity<Object> GetUniv(){
        return ResponseHandler.getResponse("Data Ditemukan", HttpStatus.OK, univRepository.GetUniv());
    }
}
