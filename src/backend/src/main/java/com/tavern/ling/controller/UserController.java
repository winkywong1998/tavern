package com.tavern.ling.controller;

import com.tavern.ling.entity.*;
import com.tavern.ling.entity.dto.UserDTO;
import com.tavern.ling.service.TeamService;
import com.tavern.ling.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private TeamService teamService;
    //CREATE and UPDATE
    @PostMapping("/participant/save")
    public Integer save(@RequestBody Participant participant){
        return userService.save(participant);
    }
    @PostMapping("/admin/save")
    public Integer save(@RequestBody Admin admin){
        return userService.save(admin);
    }
    //READ
    @GetMapping("/users")
    public List<User> getAllUser(){
        return userService.getAllUser();
    }
    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Integer id){
        return userService.getUserById(id);
    }
    @GetMapping("/participants")
    public List<Participant> getAllParticipant(){
        return userService.getAllParticipant();
    }
    @GetMapping("/participant/{id}")
    public Participant getParticipant(@PathVariable Integer id){
        return userService.getParticipant(id);
    }
    @GetMapping("/admins")
    public List<Admin> getAllAdmin(){
        return userService.getAllAdmin();
    }
    @GetMapping("/admin/{id}")
    public Admin getAdmin(@PathVariable Integer id){
        return userService.getAdmin(id);
    }
    //Regular DELETE
    @DeleteMapping("/{id}")
    public Integer delete(@PathVariable Integer id){
        teamService.emptyParticipantTeam(id);
        return userService.deleteById(id);
    }
    //Login
    @PostMapping("/login")
    public User login(@RequestBody UserDTO userDTO){
        return userService.login(userDTO.getEmail(), userDTO.getPassword());
    }
// TBD that using passing parameter or requestBody
//    @PostMapping("/login")
//    public boolean login(@RequestParam("id") Integer id, @RequestParam("password") String password){
//        return userService.login(id, password);
//    }
}
