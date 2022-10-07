package com.mainproject.server.user.controller;

import com.mainproject.server.auth.PrincipalDetails;
import com.mainproject.server.dto.SingleResponseDto;
import com.mainproject.server.place.entity.Place;
import com.mainproject.server.place.mapper.PlaceMapper;
import com.mainproject.server.place.service.PlaceService;
import com.mainproject.server.reply.entity.Reply;
import com.mainproject.server.reply.mapper.ReplyMapper;
import com.mainproject.server.reply.service.ReplyService;
import com.mainproject.server.user.dto.UserResponseDto;
import com.mainproject.server.user.entity.User;
import com.mainproject.server.user.mapper.UserMapper;
import com.mainproject.server.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/mypage")
@RequiredArgsConstructor
public class MypageController {
    private final ReplyService replyService;
    private final PlaceMapper placeMapper;
    private final ReplyMapper replyMapper;
    private final PlaceService placeService;
    private final UserService userService;
    private final UserMapper userMapper;

    @GetMapping("/place")
    public ResponseEntity<?> myPlace(@AuthenticationPrincipal PrincipalDetails principalDetails){
        User user = principalDetails.getUser();

        List<Place> findPlaceList = placeService.findPlaceByUser(user);

        return new ResponseEntity<>(
                new SingleResponseDto<>(placeMapper.placesToPlaceResponse(findPlaceList)), HttpStatus.CREATED);
    }

    @GetMapping("/reply")
    public ResponseEntity<?> myReply(@AuthenticationPrincipal PrincipalDetails principalDetails){
        User user = principalDetails.getUser();

        List<Reply> findReplyList = replyService.findReplyByUser(user);

        return new ResponseEntity<>(
                new SingleResponseDto<>(replyMapper.replyToReplyResponse(findReplyList)), HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<?> myPage(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        User user = principalDetails.getUser();
        User findUser = userService.findUser(user);
        UserResponseDto mypageUser = userMapper.userToUserResponseDto(findUser);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mypageUser), HttpStatus.CREATED);
    }

    @PatchMapping()
    public ResponseEntity patchMyPage(@AuthenticationPrincipal PrincipalDetails principalDetails,
                                        @RequestBody UserResponseDto requestBody) {
        User afterUser = userMapper.userDtoToUser(requestBody);
        User beforeUser = principalDetails.getUser();




        User findUser = userService.updatedUser(afterUser, beforeUser);

        UserResponseDto mypageUser = userMapper.userToUserResponseDto(findUser);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mypageUser), HttpStatus.CREATED);
    }

    @DeleteMapping
    public ResponseEntity deleteUser(@AuthenticationPrincipal PrincipalDetails principalDetails) {


        User user = principalDetails.getUser();
        userService.deleteUser(user);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}




