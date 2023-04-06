package com.tavern.ling.service;

import com.tavern.ling.entity.Comment;
import com.tavern.ling.mapper.CommentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentMapper commentMapper;
    //CREATE and UPDATE
    public int save(Comment comment){
        if(comment.getId() == null){
            return commentMapper.add(comment);
        }else{
            return  commentMapper.update(comment);
        }
    }
    public Integer like(Integer id) {
        return commentMapper.like(id);
    }

    public Integer dislike(Integer id) {
        return commentMapper.dislike(id);
    }
    //READ
    public Comment getByID(Integer id) {
        return commentMapper.getById(id);
    }

    public List<Comment> getByPostId(Integer id) {
        return commentMapper.getByPost(id);
    }
    //DELETE
    public Integer deleteById(Integer id) {
        return commentMapper.deleteById(id);
    }
    //Counter
    public Integer countByPost(Integer id) {return commentMapper.countByPost(id);}
    public Integer likeCount(Integer id) {
        return commentMapper.likeCount(id);
    }

    public Integer dislikeCount(Integer id) {
        return commentMapper.dislikeCount(id);
    }
}
