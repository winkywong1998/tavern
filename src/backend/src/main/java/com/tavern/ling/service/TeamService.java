package com.tavern.ling.service;

import com.tavern.ling.entity.Participant;
import com.tavern.ling.entity.Team;
import com.tavern.ling.mapper.TeamMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class TeamService {
    @Autowired
    private TeamMapper teamMapper;
    //CREATE
    public int add(Team team){
        List<Integer> pArray = new ArrayList<>();
        for (Participant p: team.getMember()) {
            pArray.add(p.getId());
            teamMapper.addRelationship(team.getId(), p.getId());
        }
        return teamMapper.addParticipantToTeam(team, pArray.toString());
    }
    //READ
    public List<Team> getAllTeam(){
        return teamMapper.getAllTeam();
    }
    public Team getById(Integer id) {
        return teamMapper.getById(id);
    }
    public Integer getTeamIdByParticipant(Integer id) {
        return teamMapper.getTeamIdByParticipant(id);
    }
    public List<Participant> getParticipantsByTeam(Integer teamId) {
        return teamMapper.getParticipantsByTeam(teamId);
    }
    //Page
    public List<Team> getPage(Integer pageNum, Integer pageSize, Integer teamSize) { return teamMapper.getPage(pageNum, pageSize, teamSize); }
    //UPDATE
    public Integer updateParticipantTeam(Participant participant, Integer newTeamId) {
        return teamMapper.updateParticipantTeam(participant, newTeamId);
    }
    public Integer emptyParticipantTeam(Integer teamId) {
        return teamMapper.emptyParticipantTeam(teamId);
    }
    public Integer deactivateById(Integer id) {return teamMapper.deactivateById(id);}
    //DELETE
    public Integer deleteById(Integer id) {
        return teamMapper.deleteById(id);
    }
    //Counter
    public Integer getMaxId() {
        return teamMapper.getMaxId() == null ? 0 : teamMapper.getMaxId();
    }
    public Integer countTeamByTeamSize(Integer teamSize) {return teamMapper.countTeamByTeamSize(teamSize);}
}
