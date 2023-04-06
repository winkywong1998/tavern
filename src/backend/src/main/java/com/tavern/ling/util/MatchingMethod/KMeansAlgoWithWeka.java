package com.tavern.ling.util.MatchingMethod;

import java.util.*;

import com.tavern.ling.entity.Participant;

import lombok.Data;
import weka.core.Attribute;
import weka.core.DenseInstance;
import weka.core.Instances;

public class KMeansAlgoWithWeka {

    Instances dataset;

    int numClusters;

    final static int NUM_OF_VALID_ATTRIBUTE = 7;


    public KMeansAlgoWithWeka(List<Participant> participants, int teamNum) {
        dataset = loadData(participants);
        this.numClusters = teamNum;
    }

    private static Instances loadData(List<Participant> participants){
        ArrayList<Attribute> attributes = new ArrayList<>();
        attributes.add(new Attribute("numOfExp"));
        attributes.add(new Attribute("major", (ArrayList<String>) null));
        attributes.add(new Attribute("degree"));
        attributes.add(new Attribute("rOrI"));
        attributes.add(new Attribute("timeZone"));
        attributes.add(new Attribute("school"));
        attributes.add(new Attribute("year"));
        Instances instances = new Instances("participant",attributes,0);
        instances.setClassIndex(instances.numAttributes() - 1);
        //add instance
        for (Participant p: participants) {
            instances.add(new DenseInstance(1.0, new double[]{
                    p.getNumOfExp(),
                    p.getMajor(),
                    p.getDegree(),
                    p.getROrI(),
                    p.getTimeZone(),
                    instances.attribute(1).addStringValue(p.getSchool()),
                    p.getYear(),
            }));
        }
        return instances;
    }

    public static Integer[] genRandomList(int range) {
        Integer[] resultIndices = new Integer[range];
        for (int i = 0; i < range; i++) {
            resultIndices[i] = i;
        }
        List<Integer> list = Arrays.asList(resultIndices);
        Collections.shuffle(list);
        list.toArray(resultIndices);
        return resultIndices;
    }


    public double distance(int dataIndex, double[] centerArray) {
        double resultDistance = 0;
        double tempDifference;

        for (int i = 0; i < dataset.numAttributes() - 1; i++) {
            tempDifference = Math.pow((dataset.instance(dataIndex).value(i) - centerArray[i]), 2);
            resultDistance += tempDifference;
        }
        resultDistance = Math.sqrt(resultDistance);
        return resultDistance;
    }

    public List<List<Integer>> kMeansMatching() {
        int[] prevClusters = new int[dataset.numInstances()];
        //Just to make prevClusters different with curClusters
        prevClusters[0] = -1;
        int[] curClusters = new int[dataset.numInstances()];
        Arrays.fill(curClusters, 0);

        double[][] centers = new double[numClusters][NUM_OF_VALID_ATTRIBUTE];

        //Initialize all the centers by getting the first #{numClusters} of data in the shuffled index array
        Integer[] randomList = genRandomList(dataset.numInstances());
        for (int i = 0; i < numClusters; i++) {
            for (int j = 0; j < NUM_OF_VALID_ATTRIBUTE; j++) {
                centers[i][j] = dataset.instance(randomList[i]).value(j);
            }
        }

        int[] clusterSize;

        //If the cluster stop changing then stop
        while (!Arrays.equals(prevClusters, curClusters)) {
            prevClusters = curClusters;
            curClusters = new int[dataset.numInstances()];

            int nearestCluster;
            double minDistance;

            for (int i = 0; i < dataset.numInstances(); i++) {
                nearestCluster = -1;
                minDistance = Double.MAX_VALUE;

                //Compare each point with each center and put them into a cluster
                for (int j = 0; j < numClusters; j++) {
                    double dis = distance(i, centers[j]);
                    if (minDistance > dis) {
                        minDistance = dis;
                        nearestCluster = j;
                    }
                }
                curClusters[i] = nearestCluster;
            }

            //Stored the number of data in each Cluster
            clusterSize = new int[numClusters];
            Arrays.fill(clusterSize, 0);

            //Be careful with number of valid attributes
            double[][] newCenters = new double[numClusters][NUM_OF_VALID_ATTRIBUTE];

            // Add all data in a cluster for each field
            for (int i = 0; i < dataset.numInstances(); i++) {
                for (int j = 0; j < NUM_OF_VALID_ATTRIBUTE; j++) {
                    newCenters[curClusters[i]][j] += dataset.instance(i).value(j);
                }
                clusterSize[curClusters[i]]++;
            }

            // Calculate new center
            for (int i = 0; i < newCenters.length; i++) {
                for (int j = 0; j < NUM_OF_VALID_ATTRIBUTE; j++) {
                    newCenters[i][j] /= clusterSize[i];
                }
            }
            centers = newCenters;
        }

        // Done with normal K-means clustering
        // centers now stores all the center for each cluster
        // curClusters now stores all the cluster that index[i] belongs to

        List<Cluster> clusters = new ArrayList<>();
        for (double[] center : centers) {
            clusters.add(new Cluster(new ArrayList<>(), center));
        }
        for(int i = 0 ; i< curClusters.length; i++){
            List<Integer> data = clusters.get(curClusters[i]).getCluster();
            data.add(i);
        }
        return clusterEqualization(clusters);
    }


    private List<List<Integer>> clusterEqualization(List<Cluster> clusters){
        int m = dataset.numInstances() / numClusters;
        //Sorted by size in descending order
        clusters.sort((o1, o2) -> o2.getCluster().size() - o1.getCluster().size());
        //Find a point p in current cluster with minimal distance to the next cluster
        for(int i = 0; i < numClusters - 1; i++){
            if (clusters.get(i).getCluster().size() == m){
                return Cluster.toResult(clusters);
            }
            List<Integer> curCluster= clusters.get(i).getCluster();
            List<Integer> nextCluster = clusters.get(i + 1).getCluster();
            int numOfPointToMove = clusters.get(i).getCluster().size() - m;
            double[] nextClusterCenter = clusters.get(i + 1).getCenter();
            for(int j = 0 ; j < numOfPointToMove; j++){
                double minDistance = Double.MAX_VALUE;
                int pointToMove = -1;
                for(int k = 0 ; k < curCluster.size(); k++){
                    double dis = distance(curCluster.get(k), nextClusterCenter);
                    if(dis < minDistance){
                        minDistance = dis;
                        pointToMove = k;
                    }
                }
                //Move point p from cluster current cluster to the next cluster
                nextCluster.add(curCluster.get(pointToMove));
                curCluster.remove(pointToMove);
                //Recalculate center for the next cluster since new data has been added to this cluster
                for(int a = 0; a < nextClusterCenter.length; a++){
                    nextClusterCenter[a] = ((nextClusterCenter[a] * nextCluster.size() - 1) + dataset.instance(pointToMove).value(a)) / nextCluster.size();
                }
            }
        }
        return Cluster.toResult(clusters);
    }
}

@Data
class Cluster {
    List<Integer> cluster;
    double[] center;

    public Cluster(List<Integer> lst, double[] tempCenter) {
        this.cluster = lst;
        this.center = tempCenter;
    }

    public String toString(){
        return cluster.toString() + "\n" + Arrays.toString(center);
    }

    public static List<List<Integer>> toResult(List<Cluster> list){
        List<List<Integer>> result = new ArrayList<>();
        for(Cluster c : list){
            result.add(c.getCluster());
        }
        return result;
    }

}
