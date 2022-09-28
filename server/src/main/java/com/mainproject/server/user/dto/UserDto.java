package com.mainproject.server.user.dto;

import com.mainproject.server.user.entity.User;
import lombok.Getter;

@Getter
//@Setter 없어도됨 Jakson이 알아서 해주는듯
public class UserDto {

    private String userId;

    private String name;

    private String password;


    public User toEntity(UserDto userDto){
         return User.builder()
                .userId(userDto.getUserId())
                .name(userDto.getName())
                .password(userDto.getPassword())
                .build();
    }
}
