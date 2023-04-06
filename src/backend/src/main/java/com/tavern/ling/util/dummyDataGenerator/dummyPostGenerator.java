package com.tavern.ling.util.dummyDataGenerator;

import java.util.Random;

public class dummyPostGenerator {

    public static void main(String[] args) {
        System.out.println(genPosts(40));
    }

    private static String genPosts(int numberOfRow){
        StringBuilder sb = new StringBuilder();
        Random rand = new Random();
        for(int i = 0 ; i < numberOfRow; i++){
            String[] companies = new String[]{"Ebay","Google","Amazon","Expedia","Microsoft","Apple","Meta","Intel"};
            String[] titleWord = new String[]{"good", "nice", "fine" ,"ok","impressive","amazing"};
            String[] contents = new String[]{"An impressive experience for me.", "Nice interview!", "The interviewer was nice."
                    ,"Although failed, but still impressive.","Meaningful and useful experience.",
                    "Easy coding questions.","Focus on BQ questions."};
            Integer companyId = rand.nextInt(companies.length) + 1;
            Integer creatorId = rand.nextInt(41) + 2;
            String company = companies[companyId - 1];
            String title = company + " is " + titleWord[rand.nextInt(titleWord.length)];
            String content = "";
            for(int j = 0 ; j < 23; j++){
                if((j + 1) % 8 == 0){
                    content += "<br>";
                }
                content += contents[rand.nextInt(contents.length)] + " ";
            }
            String base = "INSERT INTO tavern.`post`" +
                        "(title, content, `time`, companyId, creatorId) " +
                    "VALUES(" +
                    addQuote(title) + ", " +
                    addQuote(content) + ", " +
                    "CURRENT_TIMESTAMP, " +
                    companyId + ", " +
                    creatorId + ");";
            sb.append(base);
            sb.append("\n");
        }
        return sb.toString();
    }

    private static String addQuote(String s){
        return "'" + s + "'";
    }

}
