package com.tavern.ling.util.dummyDataGenerator;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

import static java.lang.Math.abs;

public class dummyMeetingGenerator {
    public static void main(String[] args) {
        genMeetings();
    }

    static String[] companyTitleWords = new String[]{"How to find a job in ", "Common interview process in ", "Info session: ", "Engineer info session: ", "HR info session: "};
    static String[] companies = new String[]{"Ebay","Google","Amazon","Expedia","Microsoft","Apple","Meta"};
    static String[] companyContents = new String[]{"How to succeed in ", "Share my interview experience with ", "Cracking the coding interview in "};

    static String[] jobTitleWords = new String[]{"How to find a job as ", "Common interview process as ", "Engineer info session: ", "HR info session: "};
    static String[] jobTypes = new String[]{"SDE", "DS", "AS"};
    static String[] jobLevels = new String[]{"entry level", "senior", "staff", "principal"};
    static String[] jobContents = new String[] {"Share my work experience as a ", "Daily lives as a "};

    private static Map<String, String> randomGenerator() {
        Random rand = new Random();
        int type = rand.nextInt(2);
        Map<String, String> ans = new HashMap<>();
        String title = "";
        String content = "";
        if (type == 1) {
            // company
            String company = companies[rand.nextInt(companies.length)];
            title = companyTitleWords[rand.nextInt(companyTitleWords.length)] + company;
            content = companyContents[rand.nextInt(companyContents.length)] + company;

        } else {
            // job
            String jobType = jobTypes[rand.nextInt(jobTypes.length)];
            String jobLevel = jobLevels[rand.nextInt(jobLevels.length)];
            String job = jobLevel + " " + jobType;
            title = jobTitleWords[rand.nextInt(jobTitleWords.length)] + jobType;
            content = jobContents[rand.nextInt(jobContents.length)] + job;
        }
        ans.put("title", title);
        ans.put("content", content);
        return ans;
    }

    private static void genMeetings(){
        Random rand = new Random();
        int meetingNum = 20;
        int maxSize = 5;

        int userNum = 40;
        int teamNum = 14;

        for (int i=1; i<=3*meetingNum; i++) {
            int meetingId = i;
            int hostId = 1;

            Date now = new Date();
            long rangeMs = 1000 * 60 * 60 * 24 * 30 * 12;
            long random = abs(rand.nextLong() % rangeMs);
            Timestamp ts = new Timestamp(now.getTime() + random);
            String meetingTime = String.valueOf(ts);

            int isGroupMeeting = rand.nextInt(2);
            if (i < 20) {
                isGroupMeeting = 0;
            } else if (i < 40) {
                isGroupMeeting = 1;
            }

            int meetingStatus = rand.nextInt(4);
            if (meetingStatus != 3) {
                meetingStatus = 0;
            }

            Map<String, String> mp = randomGenerator();
            String title = mp.get("title");
            String description = mp.get("content");

            String addMeetingSql = String.format(
                "INSERT INTO meeting " +
                "(title, hostId, meetingTime, meetingStatus, isGroupMeeting, description) " +
                "VALUES (%s, %d, %s, %d, %d, %s); ",
                addQuote(title), hostId, addQuote(meetingTime), meetingStatus, isGroupMeeting, addQuote(description)
            );

            System.out.println(addMeetingSql);
            int size = rand.nextInt(maxSize) + 1;
            if (i < 20) {
                for (int j=0; j<size; j++) {
                    int userId = rand.nextInt(userNum) + 1;
                    String meetingUserSql = String.format(
                        "INSERT INTO meeting_user " +
                        "(meetingId, userId) " +
                        "VALUES (%d, %d);",
                        meetingId, userId
                    );
                    System.out.println(meetingUserSql);
                }
            } else if (i < 40) {
                for (int j=0; j<size; j++) {
                    int teamId = rand.nextInt(teamNum) + 1;
                    String meetingTeamSql = String.format(
                        "INSERT INTO meeting_team " +
                        "(meetingId, teamId) " +
                        "VALUES (%d, %d);",
                        meetingId, teamId
                    );
                    System.out.println(meetingTeamSql);
                }
            }
        }
    };

    private static String addQuote(String s){
        return "'" + s + "'";
    }
}
