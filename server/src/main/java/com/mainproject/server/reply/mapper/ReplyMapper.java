package com.mainproject.server.reply.mapper;

import com.mainproject.server.place.entity.Place;
import com.mainproject.server.reply.dto.ReplyDto;
import com.mainproject.server.reply.entity.Reply;
import com.mainproject.server.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring",  unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ReplyMapper {

    Reply replyPostToReply(ReplyDto.post requestBody);
    Reply replyPatchToReply(ReplyDto.patch requestBody);
    @Mapping(target = "placeId", expression = "java(place.getPlaceId())")
    @Mapping(target = "userId", expression = "java(user.getUserId())")
    ReplyDto.response replyAndPlaceToReplyResponse(Reply reply, Place place, User user);
    @Mapping(target = "placeId", expression = "java(reply.getPlace().getPlaceId())")
    @Mapping(target = "userId", expression = "java(reply.getUser().getUserId())")
    ReplyDto.response replyToReplyResponse(Reply reply);



    List<ReplyDto.response> replyToReplyResponse(List<Reply> replys);
}
