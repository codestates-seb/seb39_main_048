package com.mainproejct.server.place.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@AllArgsConstructor
@Entity
@NoArgsConstructor
@Getter
@Setter
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long placeId;
    String name;
    String category;
    String serviceTime;
    String homepage;
    String number;
    String description;
    String address;
    String placeImage;
    long scoreAvg;


//    public Long getPlaceId(){
//        return this.placeId;
//    }

    @Override
    public String toString() {
        return "Place{" +
                "placeId=" + placeId +
                ", name='" + name + '\'' +
                ", category='" + category + '\'' +
                ", serviceTime='" + serviceTime + '\'' +
                ", homepage='" + homepage + '\'' +
                ", number='" + number + '\'' +
                ", description='" + description + '\'' +
                ", address='" + address + '\'' +
                ", placeImage='" + placeImage + '\'' +
                '}';
    }
}
