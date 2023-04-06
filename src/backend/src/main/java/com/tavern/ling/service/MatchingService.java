package com.tavern.ling.service;

import com.tavern.ling.entity.Participant;
import com.tavern.ling.entity.Team;
import com.tavern.ling.util.userMatch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class MatchingService {
    @Autowired
    private TeamService teamService;
    @Autowired
    private PoolService poolService;

    public List<Team> match(Integer teamSize) {
        Integer poolSize = poolService.getPoolSizeByPoolId(teamSize);
        if(poolSize < teamSize || poolSize == 0){
            return null;
        }
        List<Participant> matchingPool = poolService.getAllInPool(teamSize);
        System.out.println(matchingPool);
        int remainder = poolSize % teamSize;
        for (int i = 0; i < remainder; i++){
            matchingPool.remove(poolSize - 1);
            poolSize--;
        }
        List<Team> teams;
        if(teamSize < 2){
            return null;
        }else if(teamSize == 2){
            teams = userMatch.KMMatch(matchingPool);
        }else {
            teams = userMatch.KMeasMatch(matchingPool, teamSize);
        }
        if(teams == null){
            return null;
        }
        Integer startId = teamService.getMaxId() + 1;
        List<Team> result = new ArrayList<>();
        for (Team team: teams) {
            team.setId(startId);
            startId++;
            teamService.add(team);
            for (Participant p: team.getMember()) {
                teamService.updateParticipantTeam(p, team.getId());
            }
            result.add(teamService.getById(team.getId()));
        }
        poolService.clearFirstN(poolSize, teamSize);
        return result;
    }
}
