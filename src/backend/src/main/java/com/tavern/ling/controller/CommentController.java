package com.tavern.ling.controller;

import com.tavern.ling.entity.Comment;
import com.tavern.ling.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * This controller controls the Post Board.
 */
@CrossOrigin
@RestController
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    private CommentService commentService;
    //  CREATE and UPDATE
    @PostMapping("/save")
    public Integer save(@RequestBody Comment comment){
        return commentService.save(comment);
    }
    @PostMapping("/like/{id}")
    public Integer like(@PathVariable Integer id){
        return commentService.like(id);
    }
    @PostMapping("/dislike/{id}")
    public Integer dislike(@PathVariable Integer id){
        return commentService.dislike(id);
    }
    //READ
    @GetMapping("/{id}")
    public Comment getByID(@PathVariable Integer id){
        return commentService.getByID(id);
    }

    @GetMapping("/post/{id}")
    public List<Comment> getByPost(@PathVariable Integer id){
        return commentService.getByPostId(id);
    }
    //DELETE
    @DeleteMapping("/{id}")
    public Integer delete(@PathVariable Integer id){
        return commentService.deleteById(id);
    }
    //count
    @GetMapping("/commentNum/{id}")
    public Integer getCommentNumByPostId(@PathVariable Integer id){
        return commentService.countByPost(id);
    }
    @GetMapping("/likeCount/{id}")
    public Integer likeCount(@PathVariable Integer id){
        return commentService.likeCount(id);
    }
    @GetMapping("/dislikeCount/{id}")
    public Integer dislikeCount(@PathVariable Integer id){
        return commentService.dislikeCount(id);
    }
}
