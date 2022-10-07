package com.mainproject.server.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mainproject.server.place.entity.Place;
import com.mainproject.server.reply.entity.Reply;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "Users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {

    @Id
    private String userId;
    private String name;
    private String password;
    private String userImage;
    private  String role; // enum으로 바꾸기

    @OneToMany(mappedBy = "user")
    private List<Place> placeList;

    @OneToMany(mappedBy = "user")
    private List<Reply> replyList;

    @Builder
    public User(String userId, String name, String password, String role, String userImage) {
        this.userId = userId;
        this.name = name;
        this.password = password;
        this.role = role;
        this.userImage = userImage;

    }

}
