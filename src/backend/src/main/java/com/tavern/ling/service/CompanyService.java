package com.tavern.ling.service;

import com.tavern.ling.entity.Company;
import com.tavern.ling.mapper.CompanyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CompanyService {
    @Autowired
    private CompanyMapper companyMapper;
    //CREATE
    public int add(Company company){
        return companyMapper.add(company);
    }
    //READ
    //TODO: Redundant code
    public Company getById(Integer id) {
        return companyMapper.getById(id);
    }
    public List<Company> getPublished(){
        return companyMapper.getPublished();
    }
    public Map<String, Object> getUnPublished(Integer pageNum, Integer pageSize){
        pageNum = (pageNum - 1) * pageSize;
        List<Company> data = companyMapper.getUnPublished(pageNum, pageSize);
        Integer total = companyMapper.countUnPublished();
        Map<String, Object> res = new HashMap<>();
        res.put("data", data);
        res.put("total", total);
        return res;
    }
    public Map<String, Object> getPage(Integer pageNum, Integer pageSize) {
        pageNum = (pageNum - 1) * pageSize;
        List<Company> data = companyMapper.getPage(pageNum, pageSize);
        Integer total = companyMapper.countPublished();
        Map<String, Object> res = new HashMap<>();
        res.put("data", data);
        res.put("total", total);
        return res;
    }
    //UPDATE
    public int updateScore(Double score, Integer id) {
        return companyMapper.updateScore(score ,id);
    }
    public int update(Company company) {
        return companyMapper.update(company);
    }
    public Integer publish(Integer id) {
        return companyMapper.publish(id);
    }
    public Integer unPublish(Integer id) {
        return companyMapper.unPublish(id);
    }
    //DELETE
    public Integer delete(Integer id) {
        return companyMapper.delete(id);
    }
    //Counter
    public Integer countPublished() {return companyMapper.countPublished();}
    public Integer countUnpublished() {return companyMapper.countUnPublished();}
}
