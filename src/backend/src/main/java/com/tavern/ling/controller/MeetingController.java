package com.tavern.ling.controller;

import com.tavern.ling.entity.Meeting;
import com.tavern.ling.entity.dto.MeetingIdDTO;
import com.tavern.ling.service.MeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/meeting")
public class MeetingController {
    @Autowired
    private MeetingService meetingService;
    //CREATE
    @PostMapping("/save")
    public Integer createNewMeeting(@RequestBody Meeting meeting) {
        return meetingService.createNewMeeting(meeting);
    }
    //READ
    @GetMapping()
    public List<Meeting> selectMeetings(@RequestParam Integer idType, @RequestParam Integer id) {
        return meetingService.getMeetings(idType, id);
    }
    @GetMapping("/{id}")
    public Meeting selectMeetingById(@PathVariable Integer id) {
        return meetingService.getMeetingById(id);
    }
    @GetMapping("/page")
    public Map<String, Object> selectMeetingByPage(@RequestParam Integer pageNum, @RequestParam Integer pageSize) {
        List<Meeting> data = meetingService.getMeetingByPage(pageNum, pageSize);
        Integer total = meetingService.selectMeetingCount();
        Map<String, Object> res = new HashMap<>();
        res.put("data", data);
        res.put("total", total);
        return res;
    }
    @GetMapping("/unregistered/page")
    public Map<String, Object> selectUnregisteredMeetingByPage(@RequestParam Integer idType, @RequestParam Integer id, @RequestParam Integer pageNum, @RequestParam Integer pageSize) {
        List<Meeting> data = meetingService.getUnregisteredMeetingByPage(idType, id, pageNum, pageSize);
        Integer total = meetingService.getUnregisteredMeetingCount(idType, id);
        Map<String, Object> res = new HashMap<>();
        res.put("data", data);
        res.put("total", total);
        return res;
    }
    //UPDATE
    @PostMapping("/attend")
    public Integer attendMeeting(@RequestBody MeetingIdDTO meetingIdDTO) {
        return meetingService.attendMeeting(meetingIdDTO.getIdType(), meetingIdDTO.getId(), meetingIdDTO.getMeetingId());
    }
    @PostMapping("/quit")
    public Integer quitMeeting(@RequestBody MeetingIdDTO meetingIdDTO) {
        return meetingService.quitMeeting(meetingIdDTO.getIdType(), meetingIdDTO.getId(), meetingIdDTO.getMeetingId());
    }
    //DELETE
    @DeleteMapping("/{id}")
    public Integer deleteMeetingById(@PathVariable Integer id) {
        return meetingService.deleteMeetingById(id);
    }

}
