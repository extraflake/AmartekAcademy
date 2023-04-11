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

import com.academic.amartek.dto.BiodataRequestDTO;
import com.academic.amartek.dto.ResponseHandler;
import com.academic.amartek.models.Biodata;
import com.academic.amartek.repositories.BiodataRepository;

@CrossOrigin
@RestController
@RequestMapping("api")
public class BiodataRestController {

    private BiodataRepository biodataRepository;

    @Autowired
    public BiodataRestController(BiodataRepository biodataRepository) {
        this.biodataRepository = biodataRepository;
    }

    @GetMapping("cv/biodata/{userId}")
    public ResponseEntity<Object> getBiodata(@PathVariable(required = true) String userId){
        return ResponseHandler.getResponse("Data Ditemukan", HttpStatus.OK, biodataRepository.getBiodata(userId));
    }
    @PostMapping("cv/biodata")
    public ResponseEntity<Object> saveBiodata(@RequestBody BiodataRequestDTO biodatareq){
        //User user = userRepository.getById(biodatareq.getUser());
       Biodata biodata = new Biodata();
       //biodata.setId("USR001");
       biodata.setId(biodatareq.getUser());
       biodata.setFullname(biodatareq.getFullname());
       biodata.setDatebirth(biodatareq.getDateBirth());
       biodata.setNoTelp(biodatareq.getNoTelp());
       biodata.setAddress(biodatareq.getAddress());
       biodata.setSummary(biodatareq.getSummary());
       biodataRepository.save(biodata);

            return ResponseHandler.generateResponse("Data Berhasil Disimpan", HttpStatus.OK);
    }
    @PutMapping("cv/biodata/{userId}")
    public ResponseEntity<Object> editbiodata(@PathVariable(required = true) String userId, @RequestBody BiodataRequestDTO biodatareq){
        //User user = userRepository.getById(biodatareq.getUser());
       Biodata biodata = new Biodata();
       //biodata.setId("USR001");
       biodata.setId(userId);
       biodata.setFullname(biodatareq.getFullname());
       biodata.setDatebirth(biodatareq.getDateBirth());
       biodata.setNoTelp(biodatareq.getNoTelp());
       biodata.setAddress(biodatareq.getAddress());
       biodata.setSummary(biodatareq.getSummary());
       biodataRepository.save(biodata);
       return ResponseHandler.generateResponse("Data Berhasil Diubah", HttpStatus.OK);
    }
    @DeleteMapping("cv/biodata/{userId}")
    public ResponseEntity<Object> deleteBiodata(@PathVariable(required = true) String userId){
    //biodataRepository.deleteBiodata(userId);
    biodataRepository.deleteById(userId);
    return ResponseHandler.generateResponse("Data Berhasil diHapus", HttpStatus.OK);
    }
}
