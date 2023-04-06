package com.tavern.ling.util;

import com.tavern.ling.entity.Participant;
import com.tavern.ling.entity.Team;
import com.tavern.ling.util.MatchingMethod.KMAlgo;
import com.tavern.ling.util.MatchingMethod.KMeansAlgoWithWeka;
import com.tavern.ling.util.dummyDataGenerator.dummyParticipantGenerater;

import java.util.*;

public class userMatch {
    //For testing purpose
    public static void main(String[] args) {
        List<Participant> cand = new ArrayList<>();
        for (int i = 0 ; i < 20 ; i++){
            cand.add(dummyParticipantGenerater.genParticipant());
            System.out.println(cand.get(i));
        }
        long start = System.nanoTime();
//        List<Team> teamList = KMMatch(cand);
        List<Team> teamList1 = KMeasMatch(cand, 4);
        long end = System.nanoTime();
        long execution = end - start;
        System.out.println("Time: " + execution + " nano second");
//        for(Team t : teamList){
//            System.out.println(t.getMember());
//        }
        for(Team t : teamList1){
            System.out.println(t.getMember());
        }
    }

    public static List<Team> KMMatch (List<Participant> cand){
        List<List<Participant>> partitionResult = KMAlgo.RandomPartition(cand);
        List<Participant> partition1 = partitionResult.get(0);
        List<Participant> partition2 = partitionResult.get(1);
        double[][] graph = KMAlgo.genGraph(partition1, partition2);
        KMAlgo matchRes = new KMAlgo(graph);
        int[] res = matchRes.genMatch();
        List<Team> teamList = new ArrayList<>();
        for(int i = 0 ; i < res.length; i ++){
            List<Participant> member = new ArrayList<>();
            member.add(partition1.get(i));
            member.add(partition2.get(res[i]));
            Team team= new Team();
            team.setMember(member);
            team.setNumOfMember(member.size());
            teamList.add(team);
        }
        return teamList;
    }

    public static List<Team> KMeasMatch (List<Participant> cand, int teamSize){
        if(cand.size() % teamSize != 0){
            return null;
        }
        KMeansAlgoWithWeka matchRes = new KMeansAlgoWithWeka(cand, cand.size() / teamSize);
        List<List<Integer>> res = matchRes.kMeansMatching();
        List<Team> teamList = new ArrayList<>();
        for (List<Integer> r : res){
            Team t = new Team();
            List<Participant> p = new ArrayList<>();
            for (Integer i : r){
                p.add(cand.get(i));
            }
            t.setMember(p);
            t.setNumOfMember(teamSize);
            teamList.add(t);
        }
        return teamList;
    }


}
