package com.tavern.ling.entity;
import lombok.Data;

@Data
public class Company {
    Integer id;
    String name;
    Double score;
    Integer num_review;  //number of people reviewed

    Integer num_post; //number of post associated with the company

    String time_latest_post; //time of latest post

    String logo_url;

    Boolean published;

    String description;

    String web_url;
}
