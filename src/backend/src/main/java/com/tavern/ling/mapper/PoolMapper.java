package com.tavern.ling.mapper;

import com.tavern.ling.entity.Participant;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface  PoolMapper {
    //READ
    @Select("SELECT poolId FROM user WHERE id = #{id}")
    Integer getPoolIdByParticipant(Integer id);
    List<Participant> getAllInPool(Integer poolId);
    //UPDATE
    Integer joinPool(Integer participantId, Integer poolId);
    Integer clearPool(Integer poolId);
    Integer clearFirstN(Integer rowNum, Integer poolId);
    @Select("SELECT COUNT(*) FROM user WHERE poolId = #{poolId};")
    Integer getPoolSizeByPoolId(Integer poolId);
}
