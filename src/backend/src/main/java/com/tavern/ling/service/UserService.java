package com.tavern.ling.service;

import com.tavern.ling.entity.Admin;
import com.tavern.ling.entity.Participant;
import com.tavern.ling.entity.User;
import com.tavern.ling.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;
    //CREATE and UPDATE
    public Integer save(Participant participant) {
        if(participant.getId() == null){
            return userMapper.addParticipant(participant);
        }else{
            return  userMapper.updateParticipant(participant);
        }
    }
    public Integer save(Admin admin) {
        if(admin.getId() == null){
            return userMapper.addAdmin(admin);
        }else{
            return  userMapper.updateAdmin(admin);
        }
    }
    //READ
    public List<User> getAllUser() {
        List<User> allUser = userMapper.getAllUser();
        return allUser;
    }
    public User getUserById(Integer id) {
        return userMapper.getUserById(id);
    }
    public List<Participant> getAllParticipant() {
        return userMapper.getAllParticipant();
    }
    public Participant getParticipant(Integer id) {
        return userMapper.getParticipantById(id);
    }
    public List<Admin> getAllAdmin() {
        List<Admin> allAdmin = userMapper.getAllAdmin();
        return allAdmin;
    }
    public Admin getAdmin(Integer id) {
        return userMapper.getAdminById(id);
    }
    //DELETE
    public Integer deleteById(Integer id) {
        return userMapper.deleteById(id);
    }
    //Login
    public User login(String email, String password) {
        User result = userMapper.getUserByEmailAndPassword(email, password);
        if (result == null){
            return null;
        }else{
            return result;
        }
    }
}
