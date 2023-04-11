package com.academic.amartek.services;

import com.academic.amartek.models.User;

import java.util.List;

import org.springframework.http.ResponseEntity;

public interface UserService {
    List<User> getAll();
    User getById(String id);
    Boolean save(User user);
    Boolean delete(String id);
    ResponseEntity<Object> getUserById(String id);
    List<User> getAllUsers();
}