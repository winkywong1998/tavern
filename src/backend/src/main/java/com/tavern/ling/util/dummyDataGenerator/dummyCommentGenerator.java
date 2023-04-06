package com.tavern.ling.util.dummyDataGenerator;

import org.apache.ibatis.annotations.Insert;

import java.util.Random;

public class dummyCommentGenerator {

    public static void main(String[] args) {
        System.out.println(genPosts(40));
    }

    private static String genPosts(int numberOfRow){
        StringBuilder sb = new StringBuilder();
        Random rand = new Random();
        for(int i = 0 ; i < numberOfRow; i++){
            Integer commentNum = rand.nextInt(5) + 1;
            for(int j = 0; j < commentNum; j++){
                String[] contents = new String[]{
                        "Hey good post.",
                        "I afraid I disagree.",
                        "What a joke",
                        "Thanks for sharing",
                        "Good thought",
                        "Very useful information.",
                        "Just checking"};
                Integer creatorId = rand.nextInt(40) + 1;
                String content = contents[rand.nextInt(contents.length)];
                Integer postId = i;
                Integer likeCount = rand.nextInt(5);
                Integer dislikeCount = rand.nextInt(5);
                String base = "INSERT INTO tavern.comment " +
                        "(content, `time`, postId, creatorId, likeCount, dislikeCount)" +
                        "VALUES(" +
                        addQuote(content) + ", " +
                        "CURRENT_TIMESTAMP, " +
                        postId + ", " +
                        creatorId + ", " +
                        likeCount + ", " +
                        dislikeCount
                        + ");";
                sb.append(base);
                sb.append("\n");
            }
        }
        return sb.toString();
    }

    private static String addQuote(String s){
        return "'" + s + "'";
    }

}
