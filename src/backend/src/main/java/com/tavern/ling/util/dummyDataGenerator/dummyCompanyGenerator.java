package com.tavern.ling.util.dummyDataGenerator;

import java.util.Random;

public class dummyCompanyGenerator {
    public static void main(String[] args) {
        System.out.println(genCompanies());
    }

    private static String genCompanies(){
        StringBuilder sb = new StringBuilder();
        Random rand = new Random();
        String[] companies = new String[]{"Ebay","Google","Amazon","Expedia","Microsoft","Apple","Meta","Intel"};
        for(String company: companies){
            Integer score = rand.nextInt(2) + 4;
            Integer num_review = rand.nextInt(50) + 1;
            String base = "INSERT INTO tavern.`company`" +
                        "(name, score, num_review) " +
                    "VALUES(" +
                    addQuote(company) + ", " +
                    score + ", " +
                    num_review + ");";
            sb.append(base);
            sb.append("\n");
        }
        return sb.toString();
    }

    private static String addQuote(String s){
        return "'" + s + "'";
    }
}
