package com.tavern.ling.entity;

import lombok.Data;

@Data
public class User {
    Integer id;
    String password;
    String fName;
    String lName;
    String email;
    String uType;
}
