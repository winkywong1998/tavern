package com.tavern.ling.controller;

import com.tavern.ling.entity.Participant;
import com.tavern.ling.service.PoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/pool")
public class PoolController {
    @Autowired
    private PoolService poolService;
    //READ
    @GetMapping("getPoolId/{id}")
    public Integer getPoolIdByParticipant(@PathVariable Integer id){
        return poolService.getPoolIdByParticipant(id);
    }
    @GetMapping("getPool/{poolId}")
    public List<Participant> getAllInPool(@PathVariable Integer poolId){
        return poolService.getAllInPool(poolId);
    }
    //UPDATE
    @PostMapping("clear/{poolId}")
    public Integer clearPool(@PathVariable Integer poolId){
        return poolService.clearPool(poolId);
    }
    @PostMapping("/join")
    public Integer join(@RequestParam Integer participantId, Integer poolId){
        return poolService.joinPool(participantId, poolId);
    }
    //Count
    @GetMapping("poolSize/{poolId}")
    public Integer getPoolSizeByPoolId(@PathVariable Integer poolId){
        return poolService.getPoolSizeByPoolId(poolId);
    }
}