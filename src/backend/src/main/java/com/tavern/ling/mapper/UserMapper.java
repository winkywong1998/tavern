package com.tavern.ling.mapper;//package com.tavern.ling.mapper;

import com.tavern.ling.entity.Admin;
import com.tavern.ling.entity.Participant;
import com.tavern.ling.entity.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserMapper {
    //CREATE
    @Insert("INSERT INTO user " +
            "(password, " +
            "fName, " +
            "lName, " +
            "email, " +
            "uType, " +
            "numOfExp, " +
            "major, " +
            "degree, " +
            "rOrI, " +
            "timeZone, " +
            "school, " +
            "year)" +
            "VALUES(#{password}, " +
            "#{fName}," +
            "#{lName}," +
            "#{email}," +
            "'p'," +
            "#{numOfExp}," +
            "#{major}," +
            "#{degree}," +
            "#{rOrI}," +
            "#{timeZone}," +
            "#{school}," +
            "#{year})")
    Integer addParticipant(Participant participant);
    @Insert("INSERT INTO user " +
            "(password, fName, lName, email, uType, level)" +
            "VALUES(#{password}, #{fName},#{lName},#{email},'a',#{level})")
    Integer addAdmin(Admin admin);
    //UPDATE
    Integer updateParticipant(Participant participant);
    Integer updateAdmin(Admin admin);
    //READ
    User getUserById(Integer id);
    List<User> getAllUser();
    Participant getParticipantById(Integer id);
    List<Participant> getAllParticipant();
    Admin getAdminById(Integer id);
    List<Admin> getAllAdmin();
    //DELETE
    @Delete("DELETE FROM user " +
            "WHERE id = #{id}")
    Integer deleteById(@Param("id") Integer id);
    //Login
    User getUserByIdAndPassword(Integer id, String password);

    User getUserByEmailAndPassword(String email, String password);
}
