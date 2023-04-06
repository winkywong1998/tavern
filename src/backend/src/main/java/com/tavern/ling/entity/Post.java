package com.tavern.ling.entity;

import lombok.Data;



@Data
public class Post {
    Integer id;
    String title;
    String content;
    String time;
    Company company;
    Integer clickNum;

    Participant creator;
}
