package com.tavern.ling.entity;

import lombok.Data;

@Data
public class Participant extends User{
    Integer numOfExp;
    Integer major;
    Integer degree;
    Integer rOrI;
    Integer timeZone;
    String school;
    Integer year;

    Integer teamId;
    Integer poolId;
}
