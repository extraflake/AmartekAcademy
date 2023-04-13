package com.academic.amartek.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;

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
import com.academic.amartek.models.Biodata;
import com.academic.amartek.models.Email;
import com.academic.amartek.models.Recruitment;
import com.academic.amartek.models.User;
import com.academic.amartek.repositories.BiodataRepository;
import com.academic.amartek.repositories.UserRepository;
import com.academic.amartek.services.ArrangeInterviewService;
import com.academic.amartek.services.BiodataService;
import com.academic.amartek.services.BiodataServiceImpl;
import com.academic.amartek.services.EmailSenderService;
import com.academic.amartek.services.UserService;
import com.academic.amartek.services.UserServiceImpl;

@CrossOrigin()
@RestController
@RequestMapping("api")
public class ArrangeInterviewRestController {
    @Autowired
    private ArrangeInterviewService iArrangeInterviewService;
    private UserServiceImpl userServiceImpl;
    private BiodataService biodataService;
    private BiodataRepository biodataRepository;
    private EmailSenderService emailSender;
     private UserService userService;

    public ArrangeInterviewRestController(ArrangeInterviewService iArrangeInterviewService, 
    UserServiceImpl userServiceImpl, BiodataService biodataService, 
    EmailSenderService emailSender, UserService userService){
        this.iArrangeInterviewService = iArrangeInterviewService;
        this.userServiceImpl = userServiceImpl;
        this.biodataService = biodataService;
        this.emailSender = emailSender;
        this.userService = userService;
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

    @GetMapping("usersx")
    public ResponseEntity<Object> getAllUsersx(){
        List<User> user = userService.getAllUsers();
        return ResponseHandler.getResponse("Data di temukan", HttpStatus.OK, user);
        // return userService.getAllUsers();
    }



        @PutMapping("interview/hr/{id}")
        public ResponseEntity<Object> SaveInterviewHr(@RequestBody StatusDTO adddate, @PathVariable(required = true) Integer id) {
            System.out.println(adddate.hr_id + adddate.dateInterviewHr);
            Recruitment setrecruitment = iArrangeInterviewService.Get(id);
            if (adddate.statusHr != null && adddate.hr_id != null) {

                setrecruitment.setStatusHr(adddate.statusHr);
                iArrangeInterviewService.Save(setrecruitment);
                return ResponseHandler.generateResponse("Data status HR terupdate", HttpStatus.OK);

            }else if( adddate.dateInterviewHr != null && adddate.hr_id != null) {
                try {
                    User user = userServiceImpl.getById(setrecruitment.getApplicant().getId());
                    Biodata BioUser =  biodataService.getid(setrecruitment.getApplicant().getId());
                    Biodata BioHr = biodataService.getid(adddate.hr_id);
                    System.out.println(BioUser.getFullname());
                    setrecruitment.setHr(userServiceImpl.getById(adddate.hr_id));
                    setrecruitment.setDateInterviewHr(adddate.dateInterviewHr);
                    iArrangeInterviewService.Save(setrecruitment);
                    
                    Map<String, Object> AddMap = new HashMap<String,Object>();
                    // List<String> to = new ArrayList<>();
                    // to.add(user.getEmail());
                    // to.add(setrecruitment.getHr().getEmail());
        
                    // for (String sendto : to) {
        
                    AddMap.put("name", BioUser.getFullname());
                    AddMap.put("url", adddate.url);
                    AddMap.put("time", adddate.dateInterviewHr);
                    AddMap.put("interviewuser", "HR");
                    AddMap.put("nameinterview", BioHr.getFullname());
                    
                    Email email = new Email();
                    email.setFrom("farhanaziz939@gmail.com");
                    email.setTemplate("interview-email.html");
                    email.setSubject("Interview HR - PT. Bumi Amartha Teknologi Mandiri Graduate Development Program");
                    email.setTo(user.getEmail());
                    email.setProperties(AddMap);
                    // email.setCc(to);
                        emailSender.sendHtmlMessage(email);
                    // }

                System.out.println(setrecruitment.getDateInterviewHr());

                return ResponseHandler.generateResponse("Data status HR terupdatee", HttpStatus.OK);
            }catch (MessagingException e) {
                e.printStackTrace();
                return ResponseHandler.generateResponse("Error: " +e, HttpStatus.BAD_REQUEST);
            }
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

        }else if( adddate.dateInterviewTrainer != null && adddate.trainer_id != null) {
            try {
            User user = userServiceImpl.getById(setrecruitment.getApplicant().getId());
            Biodata BioUser =  biodataService.getid(setrecruitment.getApplicant().getId());
            Biodata BioTrainer =  biodataService.getid(adddate.trainer_id);
            System.out.println(BioUser.getFullname());

            setrecruitment.setTrainer(userServiceImpl.getById(adddate.trainer_id));
            setrecruitment.setDateInterviewTrainer(adddate.dateInterviewTrainer);
            iArrangeInterviewService.Save(setrecruitment);

            Map<String, Object> AddMap = new HashMap<String,Object>();
            System.out.println(user.getEmail());
            String[] to = new String[2];
            to[0] = setrecruitment.getHr().getEmail();
            // List<String> to = new ArrayList<>();
            // to.add(user.getEmail());
            // to.add(setrecruitment.getTrainer().getEmail());

            // for (String sendto : to) {
                AddMap.put("name", BioUser.getFullname());
                AddMap.put("url", adddate.url);
                AddMap.put("time", adddate.dateInterviewTrainer);
                AddMap.put("interviewuser", "User");
                AddMap.put("nameinterview", BioTrainer.getFullname());

            Email email = new Email();
            email.setFrom("farhanaziz939@gmail.com");
            email.setTemplate("interview-email.html");
            email.setSubject("Interview trainer - PT. Bumi Amartha Teknologi Mandiri Graduate Development Program");
            email.setTo(user.getEmail());
            email.setProperties(AddMap);

                emailSender.sendHtmlMessage(email);
            // }
;
                return ResponseHandler.generateResponse("Data status Trainer terupdatee", HttpStatus.OK);
            } catch (MessagingException e) {

                e.printStackTrace();
                return ResponseHandler.generateResponse("Error: " +e, HttpStatus.BAD_REQUEST);
            }
        }
        return ResponseHandler.generateResponse("Data tidak terupdate", HttpStatus.BAD_REQUEST);
    }


}
