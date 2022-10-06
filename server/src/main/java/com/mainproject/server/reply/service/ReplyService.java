package com.mainproject.server.reply.service;

import com.mainproject.server.place.entity.Place;
import com.mainproject.server.place.service.PlaceService;
import com.mainproject.server.reply.entity.Reply;
import com.mainproject.server.reply.repository.ReplyRepository;
import com.mainproject.server.user.entity.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ReplyService {

    private final ReplyRepository replyRepository;
    private final PlaceService placeService;

    public ReplyService(ReplyRepository replyRepository, PlaceService placeService) {
        this.replyRepository = replyRepository;
        this.placeService = placeService;
    }

    /**
     * Post
     * createReply 구현
     **/
    @Transactional
    public Reply createReply(Reply reply) {
        //scoreAvg 업데이트
        updateScoreAvg(reply);
        //reply db 적용
        Reply savedReply = savedReply(reply);

        return savedReply;
    }

    /**
     * Patch
     * updateReply구현
     **/
    @Transactional
    public Reply updateReply(Reply reply) {
        Reply findReply = findVerifiedReply(reply.getReplyId());

        Optional.ofNullable(reply.getContext())
                .ifPresent(context -> findReply.setContext(context));
        Optional.ofNullable(reply.getScore())
                .ifPresent(score -> findReply.setScore(score));
        Optional.ofNullable(reply.getReplyImage())
                .ifPresent(replyImage -> findReply.setReplyImage(replyImage));

        updateScoreAvg(findReply);
        return replyRepository.save(findReply);
    }

    /**
     * Delete
     * deleteReply 구현
     **/
    @Transactional
    public Reply deleteReply(long replyId) {
        Reply findReply = findVerifiedReply(replyId);
        replyRepository.deleteById(replyId);
        return findReply;

    }


    private Reply findVerifiedReply(Long replyId) {

        Optional<Reply> optionalReply = replyRepository.findById(replyId);
        Reply findReply =
                optionalReply.orElse(null);  // exception 추가 필요.
        return findReply;
    }

    @Transactional
    private Reply savedReply(Reply reply) {
        return replyRepository.save(reply);
    }


    public void updateScoreAvg(Reply reply) {
        Place place = reply.getPlace();

        double avg = place.getReplyList().stream()
                .mapToDouble(Reply::getScore)
                .average().orElse(0.0);

        place.setScoreAvg(avg);
        System.out.println("count and avg :" +  "/ " + avg);

        placeService.updateScoreAvgPlace(place);


    }

    public List<Reply> findReplyByUser(User user) {
        return replyRepository.findByUser(user);
    }

    public List<Reply> findReplyByPlace(Place place) {
        return replyRepository.findByPlace(place);

    }
}
