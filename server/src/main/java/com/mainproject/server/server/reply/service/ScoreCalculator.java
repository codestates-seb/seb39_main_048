package com.mainproject.server.server.reply.service;

public class ScoreCalculator {
    public static double calculateScoreAvg(double replyScore, double placeScoreAvg, double replyCount){
        return ((placeScoreAvg * (replyCount-1)) + replyScore ) / (replyCount);
    }
    public static double calculatePatchScoreAvg(double replyScore, double placeScoreAvg, double replyCount){
        return ((placeScoreAvg * (replyCount)) + replyScore ) / (replyCount);
    }


}
