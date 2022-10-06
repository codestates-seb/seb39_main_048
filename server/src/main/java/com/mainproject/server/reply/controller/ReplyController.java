package com.mainproject.server.reply.controller;

import com.mainproject.server.auth.PrincipalDetails;
import com.mainproject.server.dto.SingleResponseDto;
import com.mainproject.server.place.service.PlaceService;
import com.mainproject.server.reply.dto.ReplyDto;
import com.mainproject.server.reply.entity.Reply;
import com.mainproject.server.reply.mapper.ReplyMapper;
import com.mainproject.server.reply.service.ReplyService;
import com.mainproject.server.place.entity.Place;
import com.mainproject.server.user.entity.User;
import com.mainproject.server.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins="*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1")
public class ReplyController {

    private final UserService userService;
    private  final PlaceService placeService;
    private final ReplyService replyService;
    private final ReplyMapper mapper;

    public ReplyController(UserService userService, PlaceService placeService, ReplyService replyService, ReplyMapper mapper) {
        this.userService = userService;
        this.placeService = placeService;
        this.replyService = replyService;
        this.mapper = mapper;
    }

    /**
    * postReply 구현 완료 // scoreAvg 평균 정하는 로직 필요
    **/
    @PostMapping("/place/{place-id}/reply")
    public ResponseEntity postReply(@AuthenticationPrincipal PrincipalDetails principalDetails,
            @RequestBody ReplyDto.post requestBody,
                                    @PathVariable("place-id") long placeId) {
        //user 조회 후 반환
        User user = userService.findUser(principalDetails.getUser());
        //place를 조회
        Place place = placeService.findPlace(placeId);
        //reply 객체 생성
        Reply reply = mapper.replyPostToReply(requestBody);
        //reply, place 연결 (순서 중요)
        place.addReply(reply);
        reply.addPlace(place);
        reply.addUser(user);

        //place가 적용된 reply 저장
        Reply createdReply = replyService.createReply(reply);

        return new ResponseEntity<>(
            new SingleResponseDto<>(mapper.replyAndPlaceToReplyResponse(createdReply, place, user)), HttpStatus.CREATED);

    }

   /**
   * patchReply 구현 완료 // scoreAvg 평균 정하는 로직 필요
   **/
    @PatchMapping("/place/{place-id}/reply/{reply-id}")
    public ResponseEntity patchReply(@AuthenticationPrincipal PrincipalDetails principalDetails,
            @RequestBody ReplyDto.patch requestBody,
                             @PathVariable("reply-id") long replyId,
                                     @PathVariable("place-id") long placeId){

        //user 조회 후 반환
        User user = userService.findUser(principalDetails.getUser());
        //place 객체 생성
        Place place = placeService.findPlace(placeId);
        //reply 객체 생성
        Reply reply = mapper.replyPatchToReply(requestBody);
        reply.setReplyId(replyId);

        place.addReply(reply);
        reply.addPlace(place);
        reply.addUser(user);

        Reply updatedReply =  replyService.updateReply(reply);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.replyAndPlaceToReplyResponse(updatedReply, place, user) ), HttpStatus.OK);

    }

    //특정 장소에 대한 reply전체
    @Transactional(readOnly = true)
    @GetMapping("/place/{place-id}/reply")
    public ResponseEntity getReplyList(@PathVariable("place-id") long placeId){

        //find Place
        Place place = placeService.findPlace(placeId);

        List<Reply> replyList = replyService.findReplyByPlace(place);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.replyToReplyResponse(replyList) ), HttpStatus.OK);
    }

    /**
    * deleteReply 구현 완료 // scoreAvg 평균 정하는 로직 필요
    **/
    @DeleteMapping("/reply/{reply-id}")
    public ResponseEntity deleteReply(@AuthenticationPrincipal PrincipalDetails principalDetails,
            @PathVariable("reply-id") long replyId) {
        principalDetails.getUser();// ㅅㅏ용자 검증용
        Reply reply = replyService.deleteReply(replyId);
        replyService.updateScoreAvg(reply);

        return  new ResponseEntity(HttpStatus.NO_CONTENT);
    }}
