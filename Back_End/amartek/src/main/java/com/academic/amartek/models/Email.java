package com.academic.amartek.models;

import java.util.Map;

import lombok.Data;

@Data
public class Email {    
    String to;
    String from;
    String subject;    
    String text;
    String template;
    Map<String, Object> properties;
}
