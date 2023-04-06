package com.tavern.ling.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

@Data
public class Meeting {
    Integer id;
    String title;
    Integer hostId;
    Timestamp meetingTime;
    Integer isGroupMeeting;
    Integer meetingStatus;
    String description;
    List<Integer> participantsId;
}
