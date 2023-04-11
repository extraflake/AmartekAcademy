package com.academic.amartek.services;

import com.academic.amartek.models.Role;
import com.academic.amartek.models.User;
import com.academic.amartek.repositories.RoleRepository;
import com.academic.amartek.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    //test
    @Autowired
    private UserRepository userRepository2;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public ResponseEntity<Object> registerUser(User user) {
        if(userRepository.existsByEmail(user.getEmail())){
            Map<String, Object> customResponse = new HashMap<String, Object>();
            customResponse.put("statusCode", HttpStatus.BAD_REQUEST.value());
            customResponse.put("message","Email Already Exists!");
            return new ResponseEntity<>(customResponse, HttpStatus.BAD_REQUEST);
        }
        Role role = roleRepository.findByName("Admin");
        if(role == null) {
            Map<String, Object> customResponse = new HashMap<String, Object>();
            customResponse.put("statusCode", HttpStatus.NOT_FOUND.value());
            customResponse.put("message", "Role not found");
            return new ResponseEntity<>(customResponse, HttpStatus.NOT_FOUND);
        }
        user.setRole(role);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        Map<String, Object> customResponse = new HashMap<String, Object>();
        customResponse.put("statusCode", HttpStatus.OK.value());
        customResponse.put("message", "User Successfully Registered");
        return new ResponseEntity<>(customResponse, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Object> loginUser(User user) {
        try {
            if(!userRepository.existsByEmail(user.getEmail())) {
                // Handle error condition
                Map<String, Object> customResponse = new HashMap<String, Object>();
                customResponse.put("statusCode", HttpStatus.NOT_FOUND.value());
                customResponse.put("message", "User not found");
                return new ResponseEntity<>(customResponse, HttpStatus.NOT_FOUND);
            }

            User dbUser = userRepository.findByEmail(user.getEmail());
            // System.out.println(dbUser.getPassword());
            if(!passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {
                // Handle error condition
                Map<String, Object> customResponse = new HashMap<String, Object>();
                customResponse.put("statusCode", HttpStatus.NOT_FOUND.value());
                customResponse.put("message :" , "Password Not Match" );
                return new ResponseEntity<>(customResponse, HttpStatus.NOT_FOUND);
            }
            Map<String, Object> customResponse = new HashMap<String, Object>();
            customResponse.put("statusCode", HttpStatus.OK.value());
            customResponse.put("message", "Anda telah berhasil Login!!");
            // customResponse.put("data",user);
            return new ResponseEntity<>(customResponse, HttpStatus.OK);
        } catch (Exception e) {
            // TODO: handle exception
            Map<String, Object> customResponse = new HashMap<String, Object>();
            customResponse.put("statusCode", HttpStatus.INTERNAL_SERVER_ERROR.value());
            customResponse.put("message",e.getMessage());
            return new ResponseEntity<>(customResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
       
        // return user;
    }


    @Override
    public ResponseEntity<Object> updateUser(User user) {
        User existingUser = userRepository.findById(user.getId()).orElse(null);
        if(existingUser == null){
            Map<String, Object> response = new HashMap<>();
            response.put("message", "User not found");
            response.put("status", HttpStatus.NOT_FOUND.value());
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }

        if(user.getEmail() == null || user.getEmail().isEmpty()){
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Email Tidak Boleh Kosong");
            response.put("status", HttpStatus.BAD_REQUEST);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        User emailCheckUser = userRepository.findByEmail(user.getEmail());
        if(emailCheckUser != null && !emailCheckUser.getId().equals(user.getId())){
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Email Telah Terdaftar");
            response.put("status", HttpStatus.BAD_REQUEST);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        if(user.getEmail() != null){
            existingUser.setEmail(user.getEmail());
        }
        if(user.getRole() != null){
            Role role = roleRepository.findByName(user.getRole().toString());
            if(role == null){
                Map<String, Object> response = new HashMap<>();
                response.put("message", "Email Telah Terdaftar");
                response.put("status", HttpStatus.BAD_REQUEST);
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            existingUser.setRole(role);
        }
        if(user.getPassword() != null){
            existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
        }

        userRepository.save(existingUser);
        Map<String, Object> response = new HashMap<>();
        response.put("message", "User updated successfully");
        response.put("status", HttpStatus.OK);
        // response.put("data", updateUser);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @Override
    public void deleteUser(String id) {
        // Add business logic and validation code here
        userRepository.deleteById(id);
    }

    @Override
    public ResponseEntity<Object> getUserById(String id) {
        User foundUser = userRepository.findById(id).orElse(null);
        if(foundUser == null){
            Map<String, Object> response = new HashMap<>();
            response.put("message", "User not found");
            response.put("status", HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Data User Berhasil di ambil");
        response.put("status", HttpStatus.OK);
        response.put("data", foundUser);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @Override
    public List<User> getAllUsers() {
        // Add business logic and validation code here
        return userRepository.findAll();
    }

    @Override
    public User getid(String id) {
        // TODO Auto-generated method stub

            return userRepository2.findById(id).orElseThrow(() -> new IllegalStateException("data not found"));
        }    
}
