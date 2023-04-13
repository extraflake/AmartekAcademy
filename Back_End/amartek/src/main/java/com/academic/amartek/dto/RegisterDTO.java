package com.academic.amartek.dto;

import java.util.Date;

import org.apache.catalina.User;

public class RegisterDTO {
    private String email;
    private String password;
    private String reTypePassword;
    private String role;
    private String fullname;
    private Long noTelp;
    private Date datebirth;
    private String user;
    private Integer univ;
    private Integer major;

    public RegisterDTO(){
        super();
    }

    public RegisterDTO(String user, Integer univ, Integer major, String email, String password, String reTypePassword ,String role, String fullname, Long noTelp, Date datebirth){
        this.email = email;
        this.password = password;
        this.role = role;
        this.fullname = fullname;
        this.noTelp = noTelp;
        this.datebirth = datebirth;
        this.reTypePassword = reTypePassword;
        this.user = user;
        this.univ = univ;
        this.major = major;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }


    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String getReTypePassword(){
        return reTypePassword;
    }

    public void setReTypePassword(){
        this.reTypePassword = reTypePassword;
    }

    public String getRole(){
        return role;
    }

    public void setRole(String role){
        this.role = role;
    }

    public String getFullName(){
        return fullname;
    }

    public void setFullName(String fullname){
        this.fullname = fullname;
    }

    public Long getNoTelp(){
        return noTelp;
    }

    public void setNoTelp(Long noTelp){
        this.noTelp = noTelp;
    }

    public Date getDateBith(){
        return datebirth;
    }

    public void  setDatebirth(Date datebirth){
        this.datebirth = datebirth;
    }

    public String getUser(){
        return user;
    }

    public void  setUser(String user){
        this.user = user;
    }

    public Integer getUniv(){
        return univ;
    }

    public void  setUniv(Integer univ){
        this.univ = univ;
    }
    public Integer getMajor(){
        return major;
    }

    public void  setMajor(Integer major){
        this.major = major;
    }
}
