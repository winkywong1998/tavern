package com.tavern.ling.controller;

import com.tavern.ling.entity.Participant;
import com.tavern.ling.entity.Team;
import com.tavern.ling.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * This controller controls the Post Board.
 */
@CrossOrigin
@RestController
@RequestMapping("/team")
public class TeamController {
    @Autowired
    private TeamService teamService;
    //CREATE
    @GetMapping()
    public List<Team> getAllTeam(){
        return teamService.getAllTeam();
    }
    @GetMapping("/page")
    public Map<String, Object> getPage(@RequestParam Integer pageNum, @RequestParam Integer pageSize, @RequestParam Integer teamSize){
        pageNum = (pageNum - 1) * pageSize;
        List<Team> data = teamService.getPage(pageNum, pageSize, teamSize);
        Integer total = teamService.countTeamByTeamSize(teamSize);
        Map<String, Object> res = new HashMap<>();
        res.put("data", data);
        res.put("total", total);
        return res;
    }

    //get team by teamid
    @GetMapping("/{id}")
    public Team getTeamById(@PathVariable Integer id){
        return teamService.getById(id);
    }
    //DELETE
    @DeleteMapping("/{id}")
    public Integer delete(@PathVariable Integer id){
        return teamService.deleteById(id);
    }
    @GetMapping("/member/{teamId}")
    //Used to be: user/participants/team/{teamId}
    public List<Participant> getParticipantsByTeam(@PathVariable Integer teamId){
        return teamService.getParticipantsByTeam(teamId);
    }
    @GetMapping("/getTeam/{id}")
    //Used to be: user/getTeam/{id}
    public Integer getTeamIdByParticipant(@PathVariable Integer id){
        //Used to be getTeamIdByParticipant
        return teamService.getTeamIdByParticipant(id);
    }

}
