package com.tavern.ling.mapper;

import com.tavern.ling.entity.Participant;
import com.tavern.ling.entity.Team;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface TeamMapper {
    //CREATE
    @Insert("INSERT INTO team " +
            "(id, num_member, participants)" +
            "VALUES(#{team.id}, #{team.numOfMember}, #{participants})")
    Integer addParticipantToTeam(Team team, String participants);
    @Insert("INSERT INTO user_team " +
            "(userId, teamId)" +
            "VALUES(#{userId}, #{teamId})")
    Integer addRelationship(@Param("teamId") Integer teamId, @Param("userId") Integer userId);
    //READ
    List<Team> getAllTeam();
    Team getById(@Param("id") Integer id);
    @Select("SELECT teamId FROM user WHERE id = #{id}")
    Integer getTeamIdByParticipant(Integer id);
    List<Participant> getParticipantsByTeam(@Param("teamId") Integer teamId);
    //Page
    List<Team> getPage(@Param("pageNum") Integer pageNum, @Param("pageSize") Integer pageSize, @Param("teamSize") Integer teamSize);
    //UPDATE
    @Update("Update team set active = false where id = #{id}")
    Integer deactivateById(@Param("id") Integer id);
    @Update("update user set teamId = #{newTeamId} where id = #{participant.id}")
    Integer updateParticipantTeam(Participant participant, Integer newTeamId);
    @Update("update user set teamId = null where teamId = #{teamId}")
    Integer emptyParticipantTeam(Integer teamId);
    //DELETE
    @Delete("DELETE FROM team " +
            "WHERE id = #{id}")
    Integer deleteById(@Param("id") Integer id);
    //Counter
    @Select("SELECT max(id) FROM team")
    Integer getMaxId();
    Integer countTeamByTeamSize(@Param("teamSize") Integer teamSize);
}
