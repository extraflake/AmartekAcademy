package com.academic.amartek.dto;

public class LoginDTO {
    private String Email;
    private String Password;

    public void setEmail(String email) {
        Email = email;
    }

    public String getEmail() {
        return Email;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getPassword() {
        return Password;
    }
}
