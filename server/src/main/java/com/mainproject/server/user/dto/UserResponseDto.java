package com.mainproject.server.user.dto;

import com.mainproject.server.place.dto.PlaceDto;
import com.mainproject.server.place.entity.Place;
import com.mainproject.server.reply.dto.ReplyDto;
import com.mainproject.server.reply.entity.Reply;
import com.mainproject.server.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Getter
public class UserResponseDto {

    private String userId;

    private String name;

    private String userImage;

    //private List<PlaceDto.response> placeList;

    //private List<ReplyDto.response> replyList;



}