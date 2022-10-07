package com.mainproject.server.user.mapper;

import com.mainproject.server.place.dto.PlaceDto;
import com.mainproject.server.place.entity.Place;
import com.mainproject.server.reply.dto.ReplyDto;
import com.mainproject.server.reply.entity.Reply;
import com.mainproject.server.user.dto.UserDto;
import com.mainproject.server.user.dto.UserResponseDto;
import com.mainproject.server.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring",  unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {

    //ReplyDto.response replyToReplyResponse(Reply reply);

//    @Mapping(source = "placeList", target = "placeList")
//    @Mapping(source = "replyList", target = "replyList")
    UserResponseDto userToUserResponseDto(User findUser);

    List<Place> PlaceListToPlaceDtoList(List<PlaceDto.response> placeDtoList);
    List<Reply> ReplyListToReplyDtoList(List<ReplyDto.response> replyDtoList);

    User userDtoToUser(UserResponseDto requestBody);
}
