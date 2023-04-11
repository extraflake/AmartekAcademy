package com.academic.amartek.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academic.amartek.dto.ResponseHandler;
import com.academic.amartek.dto.StatusDTO;
import com.academic.amartek.models.Recruitment;
import com.academic.amartek.services.ArrangeInterviewService;
import com.academic.amartek.services.UserServiceImpl;

@CrossOrigin()
@RestController
@RequestMapping("api")
public class ArrangeInterviewRestController {
    @Autowired
    private ArrangeInterviewService iArrangeInterviewService;
    private UserServiceImpl userServiceImpl;

    public ArrangeInterviewRestController(ArrangeInterviewService iArrangeInterviewService, UserServiceImpl userServiceImpl){
        this.iArrangeInterviewService = iArrangeInterviewService;
        this.userServiceImpl = userServiceImpl;
    }

    @GetMapping("interview")
    public ResponseEntity<Object> Get() {
        List<Recruitment> recruitment = iArrangeInterviewService.GetAll();
        return ResponseHandler.getResponse("Data di update", HttpStatus.OK, recruitment);
    }

    @GetMapping("interview/{id}")
    public Recruitment Get(@PathVariable(required = true) Integer id) {
        Recruitment recruitment = iArrangeInterviewService.Get(id);
        return recruitment;
    }


        @PutMapping("interview/hr/{id}")
        public ResponseEntity<Object> SaveInterviewHr(@RequestBody StatusDTO adddate, @PathVariable(required = true) Integer id) {
        Recruitment setrecruitment = iArrangeInterviewService.Get(id);
            if (adddate.statusHr != null && adddate.dateInterviewHr != null && adddate.hr_id != null) {

                setrecruitment.setStatusHr(adddate.statusHr);
                iArrangeInterviewService.Save(setrecruitment);
                return ResponseHandler.generateResponse("Data status HR terupdate", HttpStatus.OK);

            }else if( adddate.dateInterviewHr != null && adddate.hr_id != null) {

                setrecruitment.setHr(userServiceImpl.getid(adddate.hr_id));
                setrecruitment.setDateInterviewHr(adddate.dateInterviewHr);
                iArrangeInterviewService.Save(setrecruitment);
                return ResponseHandler.generateResponse("Data status HR terupdatee", HttpStatus.OK);
            }
            return ResponseHandler.generateResponse("Data tidak terupdate", HttpStatus.BAD_REQUEST);
    }

    @PutMapping("interview/trainer/{id}")
        public ResponseEntity<Object> SaveInterviewTrainer(@RequestBody StatusDTO adddate, @PathVariable(required = true) Integer id) {
        Recruitment setrecruitment = iArrangeInterviewService.Get(id);

        if (adddate.statusTrainer != null && adddate.dateInterviewTrainer != null && adddate.trainer_id != null) {
            
            setrecruitment.setStatusTrainer(adddate.statusTrainer);
            iArrangeInterviewService.Save(setrecruitment);
            return ResponseHandler.generateResponse("Data status HR terupdate", HttpStatus.OK);

        }else if( adddate.dateInterviewHr != null && adddate.trainer_id != null) {
            
            setrecruitment.setTrainer(userServiceImpl.getid(adddate.trainer_id));
            setrecruitment.setDateInterviewTrainer(adddate.dateInterviewTrainer);
            iArrangeInterviewService.Save(setrecruitment);
            return ResponseHandler.generateResponse("Data status Trainer terupdatee", HttpStatus.OK);
        }
        return ResponseHandler.generateResponse("Data tidak terupdate", HttpStatus.BAD_REQUEST);
    }


}
