package com.mainproejct.server.reply.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class ReplyController {
    //post
    @PostMapping("/place/{place-id}/reply")
    public String postPlace(@RequestParam("context") String context,
                            @RequestParam("score") String score,
                            @RequestParam("replyImage") String replyImage) {
        return null; //[{ context / score /  replyImage / userId }, {},{} .....]
    }
    //patch
    @PatchMapping("/place/{place-id}/reply/{reply-id}")
    public String patchReply(@RequestParam("score") String score){

        return null;
    }

    //특정 장소에 대한 reply전체
    @GetMapping("/place/{place-id}/reply")
    public  String getReply(@PathVariable("place_id") long placeId){
        return null;
    }

    //특정 reply delete
    @DeleteMapping("/reply/{reply-id}")
    public String deletePlace(@PathVariable("place_id") long placeId) {
        return  null;
    }}
