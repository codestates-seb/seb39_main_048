package com.mainproejct.server.place.entity;

import com.mainproejct.server.reply.entity.Reply;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


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
    String placeImage; // 이미지 맵핑시 수정 필요.
    double scoreAvg; //jpa 평균 적용..  or jpql


    @OneToMany(mappedBy = "place", cascade = CascadeType.REMOVE ,orphanRemoval = true)
    private List<Reply> replyList = new ArrayList<>();

    public void addReply(Reply reply){
        replyList.add(reply);
    }

    @OneToMany(mappedBy = "place", cascade = CascadeType.PERSIST)
    private List<PlaceTag> placeTagList = new ArrayList<>();

    public void addPlaceTag(PlaceTag placeTag){
        this.placeTagList.add(placeTag);
//        if(placeTag.getPlace() != this){
//            placeTag.addPlace(this);
//        }
    }


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
                ", scoreAvg=" + scoreAvg +
                ", replyList=" + replyList +
                ", placeTagList=" + placeTagList +
                '}';
    }
}
