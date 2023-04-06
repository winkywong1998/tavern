package com.tavern.ling.controller;

import com.tavern.ling.entity.Post;
import com.tavern.ling.entity.PostWithComment;
import com.tavern.ling.service.PostService;
import org.apache.ibatis.annotations.Param;
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
@RequestMapping("/board")
public class PostController {
    @Autowired
    private PostService postService;
    //  CREATE and UPDATE
    @PostMapping("/save")
    public Integer save(@RequestBody Post post){
        return postService.save(post);
    }
    //READ
    @GetMapping()
    public List<Post> getAll(){
        return postService.getAll();
    }

    @GetMapping("/post/{id}")
    public PostWithComment getByID(@PathVariable Integer id){
        return postService.getByID(id);
    }

    @GetMapping("/creator/{id}")
    public List<Post> getByCreatorID(@PathVariable Integer id){
        return postService.getByCreatorId(id);
    }
    @GetMapping("/company/{companyId}")
    public Map<String, Object> getByCompany(@RequestParam Integer pageNum, @RequestParam Integer pageSize, @PathVariable Integer companyId){
        pageNum = (pageNum - 1) * pageSize;
        List<Post> data = postService.getByCompany(pageNum, pageSize,companyId);
        Integer total = postService.countPostByCompany(companyId);
        Map<String, Object> res = new HashMap<>();
        res.put("data", data);
        res.put("total", total);
        return res;
    }
    //page
    @GetMapping("/page")
    public Map<String, Object> findPage(@RequestParam Integer pageNum, @RequestParam Integer pageSize){
        pageNum = (pageNum - 1) * pageSize;
        List<Post> data = postService.getPage(pageNum, pageSize);
        Integer total = postService.countPost();
        Map<String, Object> res = new HashMap<>();
        res.put("data", data);
        res.put("total", total);
        return res;
    }
    //DELETE
    @DeleteMapping("/{id}")
    public Integer delete(@PathVariable Integer id){
        return postService.deleteById(id);
    }
}
