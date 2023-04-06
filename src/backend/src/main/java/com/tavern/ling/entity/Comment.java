package com.tavern.ling.entity;

import lombok.Data;

@Data
public class Comment {
    Integer id;
    String content;
    String time;
    Integer postId;
    Integer likeCount;
    Integer dislikeCount;

    Participant creator;
}
