package com.tavern.ling.entity;

import lombok.Data;

import java.util.List;

@Data
public class GroupMeeting extends Meeting {
    List<Team> participants;
}
