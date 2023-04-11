package com.academic.amartek.controllers;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academic.amartek.models.User;
import com.academic.amartek.services.UserService;

@RestController
@RequestMapping("api")
public class UserRestController {
    @Autowired
    private UserService userService;

    @PostMapping("auth/register")
    public ResponseEntity<Object> registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("auth/login")
    public ResponseEntity<Object> loginUser(@RequestBody User user) {
        return userService.loginUser(user);
    }

    @GetMapping("users/{id}")
    public ResponseEntity<Object> getUserById(@PathVariable String id) {
        return userService.getUserById(id);
    }

    @GetMapping("users")
    public ResponseEntity<Object> getAllUsers() {
        List<User> user = userService.getAllUsers();
        Map<String, Object> customResponse = new HashMap<String, Object>();
        customResponse.put("statusCode", HttpStatus.OK.value());
        customResponse.put("message","Data Berhasil di ambil");
        customResponse.put("data", user);
        return new ResponseEntity<>(customResponse, HttpStatus.OK);
        // return userService.getAllUsers();
    }

    @PutMapping("users/{id}")
    public ResponseEntity<Object> updateUser(@PathVariable String id, @RequestBody User user) {
        user.setId(id);
        return userService.updateUser(user);
    }

    @DeleteMapping("users/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        Map<String, Object> customResponse = new HashMap<String, Object>();
        customResponse.put("statusCode", HttpStatus.OK.value());
        customResponse.put("message","Data berhasil di hapus");
        // customResponse.put("data", user);
        return new ResponseEntity<>(customResponse, HttpStatus.OK);
    }
   
}

