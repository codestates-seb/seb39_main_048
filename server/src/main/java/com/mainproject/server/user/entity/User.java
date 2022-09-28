package com.mainproject.server.user.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "Users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {

    @Id
    private String userId;

    private String name;

    @Setter
    private String password;

    @Setter
    private  String role; // enum으로 바꾸기

    @Builder
    public User(String userId, String name, String password, String role) {
        this.userId = userId;
        this.name = name;
        this.password = password;
        this.role = role;
    }
}
