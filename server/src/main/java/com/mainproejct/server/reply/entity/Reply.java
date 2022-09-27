package com.mainproejct.server.reply.entity;

import com.mainproejct.server.place.entity.Place;
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
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long replyId;
    String context;
    double score;
    String replyImage; //이미지 맵핑시 수정 필요

    @ManyToOne
    @JoinColumn (name ="PLACE_ID")
    Place place;

    public void addPlace(Place place){
        this.place = place;
    }

//    public Long getReplyId() {
//        return replyId;
//    }


    @Override
    public String toString() {
        return "Reply{" +
                "replyId=" + replyId +
                ", context='" + context + '\'' +
                ", score=" + score +
                ", replyImage='" + replyImage + '\'' +
                //", place=" + place +
                '}';
    }
}
