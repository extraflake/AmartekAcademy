package com.academic.amartek.services;

import com.academic.amartek.models.User;

import java.util.List;

import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<Object> updateUser(User user);
    void deleteUser(String id);
    ResponseEntity<Object> getUserById(String id);
    List<User> getAllUsers();
    ResponseEntity<Object> loginUser(User user);
    ResponseEntity<Object> registerUser(User user);
    User getid(String id);
}