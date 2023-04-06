package com.tavern.ling.service;

import com.tavern.ling.entity.PostWithComment;
import com.tavern.ling.mapper.PostMapper;
import com.tavern.ling.entity.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostMapper postMapper;
    //CREATE and UPDATE
    public int save(Post post){
        if(post.getId() == null){
            if (post.getCompany().getId() == -1) {
                post.getCompany().setId(null);
            }
            return postMapper.add(post);
        }else{
            return  postMapper.update(post);
        }
    }
    //READ
    public List<Post> getAll(){
        return postMapper.getAll();
    }
    public PostWithComment getByID(Integer id) {
        return postMapper.getById(id);
    }

    public List<Post> getByCreatorId(Integer id) {
        return postMapper.getByCreatorId(id);
    }
    public List<Post> getByCompany(Integer pageNum, Integer pageSize, Integer companyId) {
        return postMapper.getPostByCompany(pageNum, pageSize, companyId);
    }
    //page
    public List<Post> getPage(Integer pageNum, Integer pageSize) { return postMapper.getPage(pageNum, pageSize); }
    //DELETE
    public Integer deleteById(Integer id) {
        return postMapper.deleteById(id);
    }
    //Counter
    public Integer countPost() {return postMapper.countPost();}
    public Integer countPostByCompany(Integer companyId) {return postMapper.countPostByCompany(companyId);}
    //Click Num
    public Integer clickInc(Integer id){
        return postMapper.clickInc(id);
    }
    public Integer getClickNumByPostId(Integer id){
        return  postMapper.getClickNumByPostId(id);
    }
}
