package com.mainproejct.server.reply.mapper;

import com.mainproejct.server.reply.dto.ReplyDto;
import com.mainproejct.server.reply.entity.Reply;

import java.util.List;

public interface ReplyMapper {

    Reply replyPostToReply(ReplyDto.post requestBody);
    Reply replyPatchToReply(ReplyDto.patch requestBody);
    ReplyDto.response replyToReplyResponse(Reply reply);
    List<ReplyDto.response> replyToReplyResponse(List<Reply> replys);
}
