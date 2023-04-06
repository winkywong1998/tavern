package com.tavern.ling.entity;

import lombok.Data;

import java.util.List;
@Data
public class PostWithComment extends Post{
    List<Comment> comments;
}
