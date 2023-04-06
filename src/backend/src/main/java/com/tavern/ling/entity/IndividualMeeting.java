package com.tavern.ling.entity;

import lombok.Data;

import java.util.List;

@Data
public class IndividualMeeting extends Meeting {
    List<User> participants;
}
