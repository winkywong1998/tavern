package com.tavern.ling.mapper;

import com.tavern.ling.entity.Comment;
import com.tavern.ling.entity.Post;
import com.tavern.ling.entity.PostWithComment;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CommentMapper {
    //CREATE
    @Insert("INSERT INTO comment " +
            "(content, `time`, postId, creatorId)" +
            "VALUES(#{content}, CURRENT_TIMESTAMP, #{postId}, #{creator.id})")
    Integer add(Comment comment);
    //READ
    Comment getById(@Param("id") Integer id);
    List<Comment> getByPost(@Param("id") Integer postId);
    //UPDATE
    Integer update(Comment comment);
    //DELETE
    @Delete("DELETE FROM comment " +
            "WHERE id = #{id}")
    Integer deleteById(@Param("id") Integer id);
    //Counter
    @Select("SELECT count(*) FROM comment where postId = #{postId}")
    Integer countByPost(Integer postId);

    @Update("UPDATE comment SET likeCount = likeCount + 1 WHERE id = #{id}")
    Integer like(Integer id);
    @Update("UPDATE comment SET dislikeCount = dislikeCount + 1 WHERE id = #{id}")
    Integer dislike(Integer id);
    @Select("SELECT likeCount FROM comment where id = #{commentId}")
    Integer likeCount(Integer commentId);
    @Select("SELECT dislikeCount FROM comment where id = #{commentId}")
    Integer dislikeCount(Integer commentId);
}
