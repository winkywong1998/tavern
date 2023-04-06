package com.tavern.ling.util.dummyDataGenerator;

import com.github.javafaker.Faker;

import java.util.Random;

public class dummyAdminGenerator {
    public static void main(String[] args) {
        System.out.println(genAdminSQL(2));
    }
    public static String genAdminSQL (int numberOfRow){
        StringBuilder sb = new StringBuilder();
        Random rand = new Random();
        for(int i = 0 ; i < numberOfRow; i++){
            String password = "password";
            Faker faker = new Faker();
            String fName = faker.name().firstName();
            String lName = faker.name().lastName();
            String email = emailGen(fName, lName) + String.valueOf(rand.nextInt(200)+ 1) +  "@jh.edu";
            String level = String.valueOf(rand.nextInt(5));
            String base = "INSERT INTO tavern.`user`" +
                    "(password, fName, lName, email, uType, `level`)" +
                    "VALUES(" +
                    addQuote(password) + ", " +
                    addQuote(fName) + ", " +
                    addQuote(lName) + ", " +
                    addQuote(email) + ", " +
                    addQuote("a")+ ", " +
                    level + ");";
            sb.append(base);
            sb.append("\n");
        }
        return sb.toString();
    }

    private static String emailGen(String fName, String lName){
        return Character.toLowerCase(fName.charAt(0)) + lName.toLowerCase();
    }

    private static String addQuote(String s){
        return "'" + s + "'";
    }
}
