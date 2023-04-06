package com.tavern.ling.mapper;

import com.tavern.ling.entity.GroupMeeting;
import com.tavern.ling.entity.IndividualMeeting;
import com.tavern.ling.entity.Meeting;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MeetingMapper {
    //CREATE
    Integer add(Meeting meeting);
    Integer addMeetingTeamRelation(@Param("meetingId") Integer meetingId, @Param("teamId") Integer teamID);
    Integer addMeetingTeamMemberRelation(@Param("meetingId") Integer meetingId, @Param("teamId") Integer teamID);
    Integer addMeetingUserRelation(@Param("meetingId") Integer meetingId, @Param("userId") Integer userId);    
    //READ
    Integer getUnregisteredMeetingCountByUserId(@Param("userId") Integer userId);
    Integer getUnregisteredMeetingCountByTeamId(@Param("teamId") Integer teamId);
    GroupMeeting getGroupMeetingById(@Param("meetingId") Integer meetingId);
    List<Integer> getMeetingIdByPage(@Param("firstIndex") Integer firstIndex, @Param("pageSize") Integer pageSize);
    List<Integer> getUnregisteredMeetingIdByPageAndUserId(@Param("userId") Integer userId, @Param("firstIndex") Integer firstIndex, @Param("pageSize") Integer pageSize);
    List<Integer> getUnregisteredMeetingIdByPageAndTeamId(@Param("teamId") Integer teamId, @Param("firstIndex") Integer firstIndex, @Param("pageSize") Integer pageSize);
    @Select("SELECT isGroupMeeting " +
            "FROM meeting " +
            "WHERE id = #{meetingId}")
    Integer getMeetingTypeById(@Param("meetingId") Integer meetingId);
    Meeting getById(@Param("meetingId") Integer meetingId);
    List<Integer> getMeetingIdByUserId(@Param("userId") Integer userId);
    List<Integer> getMeetingIdByTeamId(@Param("teamId") Integer teamId);
    IndividualMeeting getIndividualMeetingById(@Param("meetingId") Integer meetingId);
    //DELETE
    Integer deleteById(@Param("meetingId") Integer meetingId);
    Integer deleteMeetingTeamRelation(@Param("meetingId") Integer meetingId, @Param("teamId") Integer teamId);
    Integer deleteMeetingTeamMemberRelation(@Param("meetingId") Integer meetingId, @Param("teamId") Integer teamID);
    Integer deleteMeetingUserRelation(@Param("meetingId") Integer meetingId, @Param("userId") Integer userId);         
    //Counter
    @Select("SELECT count(*) FROM meeting")
    Integer countMeeting();
}
