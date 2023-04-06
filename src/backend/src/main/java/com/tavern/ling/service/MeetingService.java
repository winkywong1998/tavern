package com.tavern.ling.service;

import com.tavern.ling.entity.Meeting;
import com.tavern.ling.mapper.MeetingMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class MeetingService {

    @Autowired
    private MeetingMapper meetingMapper;
    //CREATE
    public Integer createNewMeeting(Meeting meeting) {
        boolean isGroupMeeting = Objects.equals(meeting.getIsGroupMeeting(), 1);
        Integer insertResult = meetingMapper.add(meeting);
        Integer meetingId = meeting.getId();
        if (isGroupMeeting) {
            for (Integer teamId : meeting.getParticipantsId()) {
                meetingMapper.addMeetingTeamRelation(meetingId, teamId);
//                meetingMapper.addMeetingTeamMemberRelation(meetingId, teamId);
            }
        } else {
            for (Integer userId : meeting.getParticipantsId()) {
                meetingMapper.addMeetingUserRelation(meetingId, userId);
            }
        }
        return 1;
    }
    //READ
    public Meeting getMeetingById(Integer id) {
        Meeting meeting = meetingMapper.getById(id);
        boolean isGroupMeeting = Objects.equals(meeting.getIsGroupMeeting(), 1);
        Meeting ans;
        if (isGroupMeeting) {
            ans = meetingMapper.getGroupMeetingById(id);
        } else {
            ans = meetingMapper.getIndividualMeetingById(id);
        }
        return ans != null ? ans : meeting;
    }
    public List<Meeting> getMeetings(Integer idType, Integer id) {
        boolean isSelectByTeamId = Objects.equals(idType, 1);
        List<Integer> ids;
        if (isSelectByTeamId) {
            ids = meetingMapper.getMeetingIdByTeamId(id);
        } else {
            ids = meetingMapper.getMeetingIdByUserId(id);
        }
        List<Meeting> meetings = new ArrayList<>();
        for (Integer i : ids) {
            meetings.add(this.getMeetingById(i));
        }
        return meetings;
    }
    public List<Meeting> getMeetingByPage(Integer pageNum, Integer pageSize) {
        Integer firstIndex = (pageNum - 1) * pageSize;
        List<Integer> meetingIds = meetingMapper.getMeetingIdByPage(firstIndex, pageSize);
        List<Meeting> meetings = new ArrayList<>();
        for (Integer meetingId : meetingIds) {
            meetings.add(this.getMeetingById(meetingId));
        }
        return meetings;
    }
    public List<Meeting> getUnregisteredMeetingByPage(Integer idType, Integer id, Integer pageNum, Integer pageSize) {
        boolean isSelectByTeamId = Objects.equals(idType, 1);
        Integer firstIndex = (pageNum - 1) * pageSize;
        List<Integer> meetingIds;
        if (isSelectByTeamId) {
            meetingIds = meetingMapper.getUnregisteredMeetingIdByPageAndTeamId(id, firstIndex, pageSize);
        } else {
            meetingIds = meetingMapper.getUnregisteredMeetingIdByPageAndUserId(id, firstIndex, pageSize);
        }
        List<Meeting> meetings = new ArrayList<>();
        for (Integer meetingId : meetingIds) {
            meetings.add(this.getMeetingById(meetingId));
        }
        return meetings;
    }
    public Integer getUnregisteredMeetingCount(Integer idType, Integer id) {
        boolean isSelectByTeamId = Objects.equals(idType, 1);
        if (isSelectByTeamId) {
            return meetingMapper.getUnregisteredMeetingCountByTeamId(id);
        } else {
            return meetingMapper.getUnregisteredMeetingCountByUserId(id);
        }
    }
    //UPDATE
    public Integer attendMeeting(Integer idType, Integer id, Integer meetingId) {
        boolean isAttendByTeamId = Objects.equals(idType, 1);
        if (isAttendByTeamId) {
            meetingMapper.addMeetingTeamRelation(meetingId, id);
//            meetingMapper.addMeetingTeamMemberRelation(meetingId, id);
        } else {
            meetingMapper.addMeetingUserRelation(meetingId, id);
        }

        return 1;
    }
    public Integer quitMeeting(Integer idType, Integer id, Integer meetingId) {
        boolean isQuitByTeamId = Objects.equals(idType, 1);
        if (isQuitByTeamId) {
            meetingMapper.deleteMeetingTeamRelation(meetingId, id);
//            meetingMapper.deleteMeetingTeamMemberRelation(meetingId, id);
        } else {
            meetingMapper.deleteMeetingUserRelation(meetingId, id);
        }
        return 1;
    }
    //DELETE
    public Integer deleteMeetingById(Integer id) {
        return meetingMapper.deleteById(id);
    }
    //Counter
    public Integer selectMeetingCount() {
        return meetingMapper.countMeeting();
    }
}
