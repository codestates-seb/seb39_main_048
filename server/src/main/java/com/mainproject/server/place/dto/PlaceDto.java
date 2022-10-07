package com.mainproject.server.place.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;


public class PlaceDto {

    @Getter
    public static class post{
        private String name;
        private String category;
        private String serviceTime;
        private String homepage;
        private String number;
        private String address;
        private String placeImage;
        private String description;


        private List<TagNameDto> tagNameList;


    }

    @Getter
    public static class patch{

        private long placeId;

        private String name;
        private String category;
        private String serviceTime;
        private String homepage;
        private String number;
        private String address;
        private String placeImage;
        private String description;
        private List<TagNameDto> tagNameList;



        @Override
        public String toString() {
            return "patch{" +
                    "placeId=" + placeId +
                    ", name='" + name + '\'' +
                    ", category='" + category + '\'' +
                    ", serviceTime='" + serviceTime + '\'' +
                    ", homepage='" + homepage + '\'' +
                    ", number='" + number + '\'' +
                    ", address='" + address + '\'' +
                    ", placeImage='" + placeImage + '\'' +
                    ", description='" + description + '\'' +
                    '}';
        }
    }

    @AllArgsConstructor
    @Getter
    public static class response{

        private long placeId;
        private String name;
        private String category;
        private String serviceTime;
        private String homepage;
        private String number;
        private String address;
        private String placeImage;
        private String description;
        private double scoreAvg;
        private String userId;

        private List<TagNameDto> tagNameList;

    }
}
