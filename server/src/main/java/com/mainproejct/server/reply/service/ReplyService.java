package com.mainproejct.server.reply.service;

import com.mainproejct.server.reply.entity.Reply;
import com.mainproejct.server.reply.repository.ReplyRepository;
import com.mainproejct.server.user.entity.User;

public class ReplyService {

    private final ReplyRepository replyRepository;

    public ReplyService(ReplyRepository replyRepository) {
        this.replyRepository = replyRepository;
    }

    /**
     * Post
     * createReply 구현
     **/
    public Reply createReply(Reply reply){
        Reply savedReply = replyRepository.save(reply);

        // todo
        return savedReply;
    }

    /**
     * Patch 
     * updateReply구현
     **/
    public Reply updateReply(Reply reply, User user){
        Reply findReply = findVerifiedReply(reply.getReplyId());

        // todo

        return replyRepository.save(findReply);
    }


    /**
     * Get
     * findReply 구현
     **/
    public Reply findReply(long replyId){
        return findVerifiedReply(replyId);
    }


    /**
     * Delete
     * deleteReply 구현
     **/
    public void deleteReply(long replyId) {
        Reply findReply = findReply(replyId);
        replyRepository.delete(findReply);
    }



    private Reply findVerifiedReply(Long replyId) {

        // todo

        return null;
    }

    private void verifyExistsReplyId(long replyId) {
        // todo

    }
}
