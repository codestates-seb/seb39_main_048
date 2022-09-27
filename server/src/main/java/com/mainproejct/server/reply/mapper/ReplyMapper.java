package com.mainproejct.server.reply.mapper;

import com.mainproejct.server.place.entity.Place;
import com.mainproejct.server.reply.dto.ReplyDto;
import com.mainproejct.server.reply.entity.Reply;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring",  unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ReplyMapper {

    Reply replyPostToReply(ReplyDto.post requestBody);
    Reply replyPatchToReply(ReplyDto.patch requestBody);
    @Mapping(target = "placeId", expression = "java(place.getPlaceId())")
    ReplyDto.response replyAndPlaceToReplyResponse(Reply reply, Place place);
    ReplyDto.response replyToReplyResponse(Reply reply);
    List<ReplyDto.response> replyToReplyResponse(List<Reply> replys);
}
