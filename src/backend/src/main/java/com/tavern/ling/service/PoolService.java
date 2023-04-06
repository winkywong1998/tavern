package com.tavern.ling.service;

import com.tavern.ling.entity.Participant;
import com.tavern.ling.mapper.PoolMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PoolService {
    @Autowired
    private PoolMapper poolMapper;

    @Autowired
    private UserService userService;

    //Pool manipulation
    public Integer joinPool(Integer participantId, Integer poolId){
        if(userService.getParticipant(participantId).getTeamId() == null){
            return poolMapper.joinPool(participantId, poolId);
        }else{
            return null;
        }
    }
    public List<Participant> getAllInPool(Integer poolId){
        return poolMapper.getAllInPool(poolId);
    }
    public Integer clearPool(Integer poolId){
        return poolMapper.clearPool(poolId);
    }
    public Integer getPoolIdByParticipant(Integer id){return poolMapper.getPoolIdByParticipant(id);}

    public Integer clearFirstN(Integer rowNum, Integer poolId) {
        return poolMapper.clearFirstN(rowNum, poolId);
    }
    public Integer getPoolSizeByPoolId(Integer poolId){
        return poolMapper.getPoolSizeByPoolId(poolId);
    }
}
