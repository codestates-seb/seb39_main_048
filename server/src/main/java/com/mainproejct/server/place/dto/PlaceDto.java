package com.mainproejct.server.place.dto;

import com.mainproejct.server.place.entity.PlaceTag;
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

        private List<PlaceTagDto> placeTagList;

        @Override
        public String toString() {
            return "post{" +
                    "name='" + name + '\'' +
                    ", category='" + category + '\'' +
                    ", serviceTime='" + serviceTime + '\'' +
                    ", homepage='" + homepage + '\'' +
                    ", number='" + number + '\'' +
                    ", address='" + address + '\'' +
                    ", placeImage='" + placeImage + '\'' +
                    ", description='" + description + '\'' +
                    ", placeTagList=" + placeTagList +
                    '}';
        }
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

        private List<PlaceTagDto> placeTagList;

    }
}
