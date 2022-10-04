package com.mainproject.server.server.user.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/member")
public class UserController {

    @GetMapping
    public ResponseEntity getMember(){
        return new ResponseEntity<>("hello", HttpStatus.OK);
    };
}
