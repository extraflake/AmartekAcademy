package com.academic.amartek.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.academic.amartek.dto.RecruitmentDTO;
import com.academic.amartek.dto.ResponseHandler;
import com.academic.amartek.models.Email;
import com.academic.amartek.models.Recruitment;
import com.academic.amartek.services.EmailSenderService;
import com.academic.amartek.services.JobService;
import com.academic.amartek.services.RecruitmentService;
import com.academic.amartek.services.UserService;

@CrossOrigin
@RestController
@RequestMapping("api")
public class RecruitmentRestController {
    
    private RecruitmentService iRecService;
    private UserService iUserService;
    private JobService iJobService;

    @Autowired
    private EmailSenderService emailSenderService;
    

    public RecruitmentRestController(RecruitmentService iRecService, UserService iUserService, JobService iJobService, EmailSenderService emailSenderService) {
        this.iRecService = iRecService;
        this.iUserService = iUserService;
        this.iJobService = iJobService;
        this.emailSenderService = emailSenderService;
    }

    @GetMapping("recruitment")
    public ResponseEntity<Object> get(){
        List<Recruitment> recruitments = iRecService.Get();                          
        return ResponseHandler.getResponse("data ditemukan", HttpStatus.OK, recruitments);
    }

    @GetMapping("recruitment/{id}")
    public ResponseEntity<Object> get(@PathVariable(required = true) Integer id){
        Recruitment recruitment = iRecService.Get(id);                
        return ResponseHandler.getResponse("data ditemukan", HttpStatus.OK, recruitment);        
    }

    @PostMapping("recruitment")
    public ResponseEntity<Object> post(@RequestBody RecruitmentDTO recruitment){                  
        Recruitment setRecruitment = new Recruitment();
        setRecruitment.setApplicant(iUserService.getById("USR230201"));        
        setRecruitment.setJob(iJobService.Get(recruitment.job));        
        setRecruitment.setStatusTrainer("reviewing");        
        setRecruitment.setStatusHr("reviewing");
        setRecruitment.setStatusApplicant("reviewing");

        Boolean result = iRecService.Save(setRecruitment);        

        if(result){
            return ResponseHandler.generateResponse("data berhasil tersimpan", HttpStatus.OK);            
        }else{            
            return ResponseHandler.generateResponse("data gagal tersimpan", HttpStatus.BAD_REQUEST);   
        }
    }

    @PutMapping("recruitment/offering/{id}")
    public ResponseEntity<Object> getContoh(@PathVariable(required = true) Integer id){        
        Recruitment recruitment = iRecService.Get(id);   

        if((recruitment.getStatusTrainer().equalsIgnoreCase("approve")) && (recruitment.getStatusHr().equalsIgnoreCase("approve"))){
            recruitment.setStatusApplicant("approve");
            iRecService.Save(recruitment);

            try {
                Email email = new Email();
                email.setTo("farhanabdulaziz86@gmail.com");
                email.setFrom("farhanaziz939@gmail.com");
                email.setSubject("Offering from PT. Bumi Amartha Teknologi Mandiri Graduate Development Program");
                email.setTemplate("approved-email.html");
                Map<String, Object> properties = new HashMap<>();
                properties.put("name", "Farhan");                
                properties.put("position", "Graduate Development Program");
                properties.put("location", "Jakarta Selatan");            
                email.setProperties(properties);
                emailSenderService.sendHtmlMessage(email);
            } catch (Exception e) {
                System.out.println(e);
            }
            return ResponseHandler.generateResponse("offering accepted dikirim", HttpStatus.OK);    
                
        }else{
            try {
                Email email = new Email();
                email.setTo("farhanabdulaziz86@gmail.com");
                email.setFrom("farhanaziz939@gmail.com");
                email.setSubject("Offering from PT. Bumi Amartha Teknologi Mandiri Graduate Development Program");
                email.setTemplate("rejected-email.html");
                Map<String, Object> properties = new HashMap<>();
                properties.put("name", "Farhan");                
                properties.put("position", "Graduate Development Program");
                properties.put("location", "Jakarta Selatan");            
                email.setProperties(properties);
                emailSenderService.sendHtmlMessage(email);
            } catch (Exception e) {
                System.out.println(e);
            }
            return ResponseHandler.generateResponse("offering rejected dikirim", HttpStatus.OK);        
        }
        
    }

}
