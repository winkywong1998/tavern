package com.tavern.ling.mapper;

import com.tavern.ling.entity.Post;
import com.tavern.ling.entity.PostWithComment;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface PostMapper {
    //CREATE
    @Insert("INSERT INTO post " +
            "(title, content, `time`, companyId, creatorId)" +
            "VALUES(#{title}, #{content}, CURRENT_TIMESTAMP, #{company.id}, #{creator.id})")

    Integer add(Post post);
    //READ
    List<Post> getAll();
    PostWithComment getById(@Param("id") Integer id);

    List<Post> getByCreatorId(@Param("id") Integer id);
    List<Post> getPage(@Param("pageNum") Integer pageNum, @Param("pageSize") Integer pageSize);
    List<Post> getPostByCompany(@Param("pageNum") Integer pageNum, @Param("pageSize") Integer pageSize, @Param("companyId") Integer companyId);
    //UPDATE
    Integer update(Post post);
    //DELETE
    @Delete("DELETE FROM post " +
            "WHERE id = #{id}")
    Integer deleteById(@Param("id") Integer id);
    //Counter
    @Select("SELECT count(*) FROM post")
    Integer countPost();
    @Select("SELECT count(*) FROM post where companyId = #{companyId}")
    Integer countPostByCompany(Integer companyId);
    //Click Num
    @Update("update post SET clickNum = clickNum + 1 WHERE id = #{id}")
    Integer clickInc(@Param("id") Integer id);
    @Select("SELECT clickNum FROM post where id = #{id}")
    Integer getClickNumByPostId(@Param("id") Integer id);
}
