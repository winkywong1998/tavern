package com.tavern.ling.mapper;

import com.tavern.ling.entity.Company;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CompanyMapper {
    //CREATE
    Integer add(Company company);
    //READ
    @Select("SELECT * FROM company " +
            "WHERE id = #{id}")
    Company getById(@Param("id") Integer id);
    @Select("SELECT * FROM company where published = true")
    List<Company> getPublished();
    @Select("SELECT * FROM company where published = false limit #{pageNum}, #{pageSize}")
    List<Company> getUnPublished(Integer pageNum, Integer pageSize);
    //Page
    @Select("SELECT * FROM company where published = true limit #{pageNum}, #{pageSize}")
    List<Company> getPage(Integer pageNum, Integer pageSize);
    //UPDATE
    Integer update(Company company);
    //Update the score of company
    Integer updateScore(Double score, Integer id);
    @Update("update company set published = true where id = #{id}")
    Integer publish(@Param("id") Integer id);
    @Update("update company set published = false where id = #{id}")
    Integer unPublish(@Param("id") Integer id);
    //DELETE
    @Delete("DELETE FROM company " +
            "WHERE id = #{id}")
    Integer delete(@Param("id") Integer id);
    //Counter
    @Select("SELECT count(*) FROM company where published = true")
    Integer countPublished();
    @Select("SELECT count(*) FROM company where published = false")
    Integer countUnPublished();
}
