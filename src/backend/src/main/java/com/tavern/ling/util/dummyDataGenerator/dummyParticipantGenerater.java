package com.tavern.ling.util.dummyDataGenerator;

import com.github.javafaker.Faker;
import com.github.javafaker.University;
import com.tavern.ling.entity.Participant;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

public class dummyParticipantGenerater {
    public static void main(String[] args) {
        System.out.println(genParticipantSQL(20));
    }

    public static Participant genParticipant () {
        Random rand = new Random();
        Participant p = new Participant();
        String password = "password";
        Faker faker = new Faker();
        String fName = faker.name().firstName();
        String lName = faker.name().lastName();
        HashMap<String, String> schoolMap = new HashMap<>();
        schoolMap.put("Johns Hopkins University","@jh.edu");
        schoolMap.put("University of Maryland", "@umd.edu");
        schoolMap.put("Carnegie Mellon University", "@cmu.edu");
        schoolMap.put("Harvard University","@harvard.edu");
        schoolMap.put("New York University", "@nyu.edu");
        Integer numOfExp = rand.nextInt(4) + 1;
        Integer major = rand.nextInt(10)+1;
        Integer degree = rand.nextInt(3) + 1;
        Integer rOrI = rand.nextInt(2);
        Integer timeZone = rand.nextInt(3);
        List<String> keysAsArray = new ArrayList<>(schoolMap.keySet());
        String school = schoolMap.get(keysAsArray.get(rand.nextInt(keysAsArray.size())));
        String email = emailGen(fName, lName) + (rand.nextInt(200) + 1) + schoolMap.get(school);
        Integer year = rand.nextInt(5) + 1;
        p.setDegree(degree);
        p.setMajor(major);
        p.setNumOfExp(numOfExp);
        p.setSchool(school);
        p.setTimeZone(timeZone);
        p.setROrI(rOrI);
        p.setEmail(email);
        p.setYear(year);
        p.setPassword(password);
        p.setFName(fName);
        p.setLName(lName);
        return p;
    }

    public static String genParticipantSQL (int numberOfRow){
        StringBuilder sb = new StringBuilder();
        Random rand = new Random();
        for(int i = 0 ; i < numberOfRow; i++){
            String password = "password";
            Faker faker = new Faker();
            String fName = faker.name().firstName();
            String lName = faker.name().lastName();
//            HashMap<String, String> schoolMap = new HashMap<>();
//            schoolMap.put("Johns Hopkins University","@jh.edu");
//            schoolMap.put("University of Maryland", "@umd.edu");
//            schoolMap.put("Carnegie Mellon University", "@cmu.edu");
//            schoolMap.put("Harvard University","@harvard.edu");
//            schoolMap.put("New York University", "@nyu.edu");
//            List<String> keysAsArray = new ArrayList<>(schoolMap.keySet());
//            String school = schoolMap.get(keysAsArray.get(rand.nextInt(keysAsArray.size())));
            Integer numOfExp = rand.nextInt(4) + 1;
            Integer major = rand.nextInt(10)+1;
            Integer degree = rand.nextInt(3) + 1;
            Integer rOrI = rand.nextInt(2);
            Integer timeZone = rand.nextInt(3);
            String school = faker.university().name();
            String email = emailGen(fName, lName) + (rand.nextInt(200) + 1) + emailSuffix(school);
            Integer year = rand.nextInt(5) + 1;
            String poolId = String.valueOf(rand.nextInt(3) + 2);
            String base = "INSERT INTO tavern.`user`" +
                    "(password, fName, lName, email, uType, numOfExp, major, `degree`, rOrI, timeZone, school, `year`, `poolId`)" +
                    "VALUES(" +
                    addQuote(password) + ", " +
                    addQuote(fName) + ", " +
                    addQuote(lName) + ", " +
                    addQuote(email) + ", " +
                    addQuote("p")+ ", " +
                    numOfExp + ", " +
                    major + ", " +
                    degree + ", " +
                    rOrI + ", " +
                    timeZone + ", " +
                    addQuote(school) + ", " +
                    year + ", " +
                    poolId + ");";
            sb.append(base);
            sb.append("\n");
        }
        return sb.toString();
    }

    private static String emailGen(String fName, String lName){
        return Character.toLowerCase(fName.charAt(0)) + lName.toLowerCase();
    }

    private static String emailSuffix(String name){
        String[] split = name.split(" ");
        StringBuilder sb = new StringBuilder();
        sb.append("@");
        for(String s : split){
            sb.append(Character.toLowerCase(s.charAt(0)));
        }
        sb.append(".edu");
        return sb.toString();
    }

    private static String addQuote(String s){
        return "'" + s + "'";
    }
}
