package com.tavern.ling.util.MatchingMethod;

import com.tavern.ling.entity.Participant;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class KMAlgo {
    //A graph shows the cost from x to y
    //Consider as edges
    double[][] graph;
    //Record if x is matched
    boolean[] xMatched;
    //Record if y is matched
    boolean[] yMatched;
    //Score of each X
    double[] XScore;
    //Score of each Y
    double[] YScore;
    //Match Result, for [i] is x and match[i] is y
    int[] match;
    //Size of the graph, number of x and y are both n
    int n;
    //Score
    double[] score;

    private static final double INFINITE = Double.MAX_VALUE;

    //Constructor
    public KMAlgo(double[][] graph) {
        this.graph = graph;
        n = graph.length;
        xMatched = new boolean[n];
        yMatched = new boolean[n];
        XScore = new double[n];
        YScore = new double[n];
        match = new int[n];
        score = new double[n];

        Arrays.fill(match, -1);
        //Initialize the score of each X with the highest weight(edge) connected to it
        for (double k = 0; k < n; k++) {
            XScore[(int) k] = graph[(int) k][0];
            for (int l = 0; l < n; l++) {
                XScore[(int) k] = Math.max(XScore[(int) k], graph[(int) k][l]);
            }
        }
    }

    //Hungarian Algorithm DFS
    private boolean dfs(int i) {
        //Make x is matched
        xMatched[i] = true;
        //For each X iterate through each Y
        for (int j = 0; j < n; j++) {
            if (!yMatched[j]){
                //Score changing formula
                double gap = XScore[i] + YScore[j] - graph[i][j];
                //Only make a match when score of X + score of Y equals their weight(edge) in the graph
                if (gap == 0) {
                    yMatched[j] = true;
                    if (match[j] == -1 || dfs(match[j])) {
                        match[j] = i;
                        return true;
                    }
                } else {
                    score[j] = Math.min(score[j], gap);
                }
            }
        }
        return false;
    }


    public int[] genMatch() {
        //Iterate through all the X
        for (int i = 0; i < n; i++) {
            Arrays.fill(score, INFINITE);
            while (true) {
                Arrays.fill(xMatched, false);
                Arrays.fill(yMatched, false);
                if (dfs(i)) break;
                //Note that diff is in order for X to reach Y, the minimum score that X has to deduct
                double diff = INFINITE;
                for (int j = 0; j < n; j++) {
                    if (!yMatched[j]) {
                        diff = Math.min(diff, score[j]);
                    }
                }
                //Update score
                //If for an X that cannot match Y, decrease the score of X and increase the score of Y
                //Keep iterate until it finds a match
                updateScore(diff);
            }
        }
        return match;
    }


    private void updateScore(double diff){
        for (int i = 0; i < n; i++) {
            if (xMatched[i]){
                XScore[i] -= diff;
            }
            if (yMatched[i]){
                YScore[i] += diff;
            }
            if (!xMatched[i] && !yMatched[i]){
                score[i] -= diff;
            }
        }
    }

    public static List<List<Participant>> RandomPartition(List<Participant> cand){
        int n = cand.size();
        List<Participant> l1 = new ArrayList<>(cand);
        List<Participant> l2 = new ArrayList<>();
        Random rand = new Random();
        while(l1.size() > n / 2) {
            int randIndex = rand.nextInt(l1.size());
            l2.add(l1.get(randIndex));
            l1.remove(randIndex);
        }
        List<List<Participant>> res = new ArrayList<>();
        res.add(l1);
        res.add(l2);
        return res;
    }
    public static double[][] genGraph(List<Participant> x, List<Participant> y) {
        int n = x.size();
        double[][] graph = new double[n][n];
        for(int i = 0 ; i < n; i++){
            for (int j = 0; j < n; j++){
                graph[i][j] = getScore(x.get(i), x.get(j));
            }
        }
        return graph;
    }


    private static double getScore(Participant a, Participant b) {
        Random rand = new Random();
        double sum = 0.0;
        double numOfExp = Math.abs(a.getNumOfExp() - b.getNumOfExp()) * 0.8 + 1;
        double major = a.getMajor() == b.getMajor() ?  1.8  : 1.1;
        double degree = a.getDegree() == b.getDegree() ?  1.4  : 1.2;
        double rOrI = a.getROrI().equals(b.getROrI()) ?  1.9  : 1.1;
        double timeZone = Math.abs(a.getTimeZone() - b.getTimeZone()) * 0.7 + 1;
        double school= a.getSchool() == b.getSchool() ?  1.9  : 1.2;
        double year= Math.abs(a.getNumOfExp() - b.getNumOfExp()) * 0.7 + 1;
        double randomDeviation = rand.nextDouble();
        sum += sum  + numOfExp + major + degree + rOrI + timeZone + school + year + randomDeviation;
        return sum;
    }

    //For testing purpose
//    public static void main(String[] args) {
//        double[][] graph = {
//                {3, 5, 5, 4, 1, 4},
//                {2, 2, 1, 2, 2, 2},
//                {2, 4, 4, 1, 0, 2},
//                {4, 1, 1, 0, 0, 4},
//                {1, 2, 1, 3, 3, 5},
//                {5, 2, 4, 2, 1, 5}
//        };
//        KMAlgo km = new KMAlgo(graph);
//        int[] res = km.genMatch();
//        for (int i :res){
//            System.out.print(i + " ");
//        }
//    }
}