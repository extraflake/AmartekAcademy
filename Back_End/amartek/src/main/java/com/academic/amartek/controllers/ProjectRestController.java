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

import com.academic.amartek.dto.ProjectRequestDTO;
import com.academic.amartek.dto.ResponseHandler;
import com.academic.amartek.models.Project;
import com.academic.amartek.models.User;
import com.academic.amartek.repositories.ProjectRepository;

@CrossOrigin
@RestController
@RequestMapping("api")
public class ProjectRestController {
    
    private ProjectRepository projectRepository;

    @Autowired
    public ProjectRestController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }
    @GetMapping("cv/project/{userId}")
    public ResponseEntity<Object> getProject(@PathVariable(required = true) String userId){
        return ResponseHandler.getResponse("Data Ditemukan", HttpStatus.OK, projectRepository.getProject(userId));
    }
    @PostMapping("cv/project")
    public ResponseEntity<Object> saveProject(@RequestBody ProjectRequestDTO projectRequestDTO){
        //User user = userRepository.getById(projectRequestDTO.getUser());
        User user = new User();
        user.setId(projectRequestDTO.getUser());
        Project project = new Project();
        project.setUser(user);
        project.setName(projectRequestDTO.getName());
        project.setProject_start(projectRequestDTO.getProjectStart());
        project.setProject_end(projectRequestDTO.getProjectEnd());
        project.setProject_desc(projectRequestDTO.getProjectDesc());
        projectRepository.save(project);
        
        return ResponseHandler.generateResponse("Data Berhasil Disimpan", HttpStatus.OK);
        //return ResponseHandler.generateResponse("Data gagal Disimpan", HttpStatus.BAD_REQUEST);
    }
    @PutMapping("cv/project/{id}")
    public ResponseEntity<Object> editProject(@PathVariable(required = true) Integer id, @RequestBody ProjectRequestDTO projectRequestDTO){
        //User user = userRepository.getById(projectRequestDTO.getUser());
        User user = new User();
        user.setId(projectRequestDTO.getUser());
        Project project = new Project();
        project.setId(id);
        project.setUser(user);
        project.setName(projectRequestDTO.getName());
        project.setProject_start(projectRequestDTO.getProjectStart());
        project.setProject_end(projectRequestDTO.getProjectEnd());
        project.setProject_desc(projectRequestDTO.getProjectDesc());
        projectRepository.save(project);
        return ResponseHandler.generateResponse("Data Berhasil Diubah", HttpStatus.OK);
    }
    @DeleteMapping("cv/project/{id}")
    public ResponseEntity<Object> deleteProject(@PathVariable(required = true) Integer id){
    projectRepository.deleteById(id);
    // projectRepository.deleteProject(id);
    return ResponseHandler.generateResponse("Data Berhasil diHapus", HttpStatus.OK);
    }
}
