package com.mainproject.server.reply.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mainproject.server.place.entity.Place;
import com.mainproject.server.user.entity.User;
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

    @JsonIgnore
    @ManyToOne
    @JoinColumn (name = "USER_ID")
    User user;


    @ManyToOne
    @JoinColumn (name ="PLACE_ID")
    Place place;

    public void addPlace(Place place){
        this.place = place;
        if(!place.getReplyList().contains(this)){
            place.getReplyList().add(this);
        }
    }

    public void addUser(User user) {
        this.user = user;
        if (!user.getReplyList().contains(this)) {
            user.getReplyList().add(this);
        }

    }
}
