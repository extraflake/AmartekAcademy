package com.academic.amartek.controllers;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.academic.amartek.dto.LoginDTO;
import com.academic.amartek.dto.RegisterDTO;
import com.academic.amartek.models.Role;
import com.academic.amartek.models.User;
import com.academic.amartek.repositories.RoleRepository;
import com.academic.amartek.repositories.UserRepository;
import com.academic.amartek.services.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@RestController
@RequestMapping("api")
public class UserRestController {
    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private EntityManager entityManager;
    
    @Autowired
    private UserRepository userRepository;

    private static final long EXPIRATION_TIME = 864_000_000; // 10 days
    byte[] keyBytes = Keys.secretKeyFor(SignatureAlgorithm.HS512).getEncoded();

    @PostMapping("auth/register")
    public ResponseEntity<Object> registerUser(@RequestBody RegisterDTO regist){
       
        Boolean foundEmail = userRepository.existsByEmail(regist.getEmail());
        if(foundEmail){
            Map<String, Object> customResponse = new HashMap<String, Object>();
            customResponse.put("statusCode", HttpStatus.BAD_REQUEST.value());
            customResponse.put("message","Email Already Exists!");
            return new ResponseEntity<>(customResponse, HttpStatus.BAD_REQUEST);
        }
        Role roleId = roleRepository.findByName("Admin");
        User setUser = new User();
        setUser.setEmail(regist.getEmail());
        setUser.setPassword(passwordEncoder.encode(regist.getEmail()));
        setUser.setRole(roleId);
        setUser.setId("USR");
        Boolean saveUser = userService.save(setUser);
        // System.out.println(saveUser);
        Map<String, Object> customResponse = new HashMap<String, Object>();
        customResponse.put("statusCode", HttpStatus.OK.value());
        customResponse.put("message","Berhasil Registrasi");
        return new ResponseEntity<>(customResponse, HttpStatus.OK);
    }

    @PostMapping("auth/login")
    public ResponseEntity<Object> loginUser(@RequestBody LoginDTO login){
        if(!userRepository.existsByEmail(login.getEmail())) {
            // Handle error condition
            Map<String, Object> customResponse = new HashMap<String, Object>();
            customResponse.put("statusCode", HttpStatus.NOT_FOUND.value());
            customResponse.put("message", "User not found");
            return new ResponseEntity<>(customResponse, HttpStatus.NOT_FOUND);
        }
        User dbUser = userRepository.findByEmail(login.getEmail());
        if(!passwordEncoder.matches(login.getPassword(), dbUser.getPassword())) {
            // Handle error condition
            Map<String, Object> customResponse = new HashMap<String, Object>();
            customResponse.put("statusCode", HttpStatus.NOT_FOUND.value());
            customResponse.put("message :" , "Password Not Match" );
            return new ResponseEntity<>(customResponse, HttpStatus.NOT_FOUND);
        }
        // MASIH HARUS DI FIX 
        // Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(login.getEmail(), login.getPassword()));
        // System.out.println(authentication.getPrincipal());
        // MyUserDetail userDetail = (MyUserDetail) authentication.getPrincipal();

        String token = Jwts.builder().setSubject(login.getEmail()).setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME)).signWith(SignatureAlgorithm.HS512, keyBytes).compact();

        Map<String, Object> customResponse = new HashMap<String, Object>();
        customResponse.put("statusCode", HttpStatus.OK.value());
        customResponse.put("message","Login Berhasi");
        customResponse.put("data",token.toString());
        return new ResponseEntity<>(customResponse, HttpStatus.OK);
    }

    // @GetMapping("users/{id}")
    // public ResponseEntity<Object> getUserById(@PathVariable String id) {
    //     return userService.getUserById(id);
    // }

    @GetMapping("users")
    public ResponseEntity<Object> getAllUsers(){
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
        User getUser = userService.getById(id);
        user.setId(id);
        if(getUser == null){
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
            getUser.setEmail(user.getEmail());
        }
        if(user.getPassword() != null){
            getUser.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        userService.save(getUser);
        Map<String, Object> response = new HashMap<>();
        response.put("message", "User updated successfully");
        response.put("status", HttpStatus.OK);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("users/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable String id) {
        userService.delete(id);
        Map<String, Object> customResponse = new HashMap<String, Object>();
        customResponse.put("statusCode", HttpStatus.OK.value());
        customResponse.put("message","Data berhasil di hapus");
        // customResponse.put("data", user);
        return new ResponseEntity<>(customResponse, HttpStatus.OK);
    }
   
}


