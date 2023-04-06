package com.tavern.ling.controller;

import com.tavern.ling.entity.Company;
import com.tavern.ling.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * This controller controls the Post Board.
 */
@CrossOrigin
@RestController
@RequestMapping("/companies")
public class CompanyController {
    @Autowired
    private CompanyService companyService;
    //CREATE
    //TODO: make it more clear, it sends request?
    @PostMapping("/addCompany")
    public Integer addCompany(@RequestBody Company company){
        return companyService.add(company);
    }
    //UPDATE
    @PostMapping("/editCompany")
    public Integer update(@RequestBody Company company){
        return companyService.update(company);
    }
    @PostMapping("/{id}")
    public Integer updateScore(@RequestParam Double score, @PathVariable Integer id){
        return companyService.updateScore(score, id);
    }
    @PostMapping("/publish/{id}")
    public Integer publish(@PathVariable Integer id){
        return companyService.publish(id);
    }
    @PostMapping("/unPublish/{id}")
    public Integer unPublish(@PathVariable Integer id){
        return companyService.unPublish(id);
    }
    //READ
    @GetMapping("/{id}")
    public Company getCompanyById(@PathVariable Integer id){
        return companyService.getById(id);
    }
    @GetMapping()
    public List<Company> getPublished(){
        return companyService.getPublished();
    }
    @GetMapping("/unPublished")
    public Map<String, Object> getUnPublished(@RequestParam Integer pageNum, @RequestParam Integer pageSize){
        return companyService.getUnPublished(pageNum, pageSize);
    }
    @GetMapping("/page")
    public Map<String, Object> getPage(@RequestParam Integer pageNum, @RequestParam Integer pageSize){
        return companyService.getPage(pageNum, pageSize);
    }
    //DELETE
    @DeleteMapping("/{id}")
    public Integer delete(@PathVariable Integer id){
        return companyService.delete(id);
    }
}
