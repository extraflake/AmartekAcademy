package com.academic.amartek.services;

import com.academic.amartek.models.User;
import com.academic.amartek.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@Service
public class UserServiceImpl implements UserService {

  

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAll() {
        return userRepository.findAll() ;
    }

    @Override
    public User getById(String id){
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public Boolean save(User user){
        userRepository.save(user);
        return userRepository.findById(user.getId()).isPresent();
    }

    @Override
    public Boolean delete(String id){
        userRepository.deleteById(id);
        return !userRepository.findById(id).isPresent();
    }

    //JPQL QUERY
    @Override
    public ResponseEntity<Object> getUserById(String id) {
        Optional<User> foundUser = userRepository.findActiveUserById(id);
        // User foundUser = userRepository.findById(id).orElse(null);
        if(foundUser.isEmpty()){
            Map<String, Object> response = new HashMap<>();
            response.put("message", "User not found");
            response.put("status", HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Data User Berhasil di ambil");
        response.put("status", HttpStatus.OK);
        // response.put("data", foundUser);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @Override
    public List<User> getAllUsers() {
        List<User> activeUsers = userRepository.findAllActiveUsers();
        // Add business logic and validation code here
        return activeUsers;
        // return userRepository.findAll();
    }
}
