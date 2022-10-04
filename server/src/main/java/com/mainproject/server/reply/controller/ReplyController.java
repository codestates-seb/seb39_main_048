package com.mainproject.server.reply.controller;

import com.mainproject.server.dto.SingleResponseDto;
import com.mainproject.server.place.service.PlaceService;
import com.mainproject.server.reply.dto.ReplyDto;
import com.mainproject.server.reply.entity.Reply;
import com.mainproject.server.reply.mapper.ReplyMapper;
import com.mainproject.server.reply.service.ReplyService;
import com.mainproject.server.place.entity.Place;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ReplyController {

    private  final PlaceService placeService;
    private final ReplyService replyService;
    private final ReplyMapper mapper;

    public ReplyController(PlaceService placeService, ReplyService replyService, ReplyMapper mapper) {
        this.placeService = placeService;
        this.replyService = replyService;
        this.mapper = mapper;
    }

    /**
    * postReply 구현 완료 // scoreAvg 평균 정하는 로직 필요
    **/
    @PostMapping("/place/{place-id}/reply")
    public ResponseEntity postReply(@RequestBody ReplyDto.post requestBody,
                                    @PathVariable("place-id") long placeId) {
        //place를 조회
        Place place = placeService.findPlace(placeId);
        //reply 객체 생성
        Reply reply = mapper.replyPostToReply(requestBody);
        //reply, place 연결 (순서 중요)
        place.addReply(reply);
        reply.addPlace(place);

        //place가 적용된 reply 저장
        Reply createdReply = replyService.createReply(reply);

        return new ResponseEntity<>(
            new SingleResponseDto<>(mapper.replyAndPlaceToReplyResponse(createdReply, place)), HttpStatus.CREATED);

    }

   /**
   * patchReply 구현 완료 // scoreAvg 평균 정하는 로직 필요
   **/
    @PatchMapping("/place/{place-id}/reply/{reply-id}")
    public ResponseEntity patchReply(@RequestBody ReplyDto.patch requestBody,
                             @PathVariable("reply-id") long replyId,
                                     @PathVariable("place-id") long placeId){
        //place 객체 생성
        Place place = placeService.findPlace(placeId);
        //reply 객체 생성

        Reply reply = mapper.replyPatchToReply(requestBody);
        reply.setReplyId(replyId);

        place.addReply(reply);
        reply.addPlace(place);

        Reply updatedReply =  replyService.updateReply(reply);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.replyAndPlaceToReplyResponse(updatedReply, place) ), HttpStatus.OK);

    }

    //특정 장소에 대한 reply전체
    @GetMapping("/place/{place-id}/reply")
    public ResponseEntity getReplyList(@PathVariable("place_id") long placeId){
        List<Reply> replyList;
        return null;
    }

    /**
    * deleteReply 구현 완료 // scoreAvg 평균 정하는 로직 필요
    **/
    @DeleteMapping("/reply/{reply-id}")
    public ResponseEntity deleteReply(@PathVariable("reply-id") long replyId) {
        replyService.deleteReply(replyId);

        return  new ResponseEntity(HttpStatus.NO_CONTENT);
    }}
