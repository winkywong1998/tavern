package com.tavern.ling.entity;

import lombok.Data;

import java.util.List;

@Data
public class Team {
    Integer id;
    Integer numOfMember;
    List<Participant> member;
}
