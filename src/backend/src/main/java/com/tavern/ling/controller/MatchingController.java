package com.tavern.ling.controller;
import com.tavern.ling.service.MatchingService;
import com.tavern.ling.entity.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/matching")
public class MatchingController {
    @Autowired
    private MatchingService matchingService;

    @GetMapping("/{teamSize}")
    public List<Team> matchTeam(@PathVariable Integer teamSize){
        return matchingService.match(teamSize);
    }
}
