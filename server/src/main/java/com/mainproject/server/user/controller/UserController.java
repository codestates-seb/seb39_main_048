package com.mainproject.server.user.controller;

import com.mainproject.server.auth.PrincipalDetails;
import com.mainproject.server.user.dto.UserDto;
import com.mainproject.server.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

//@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUpUser(@RequestBody UserDto userDto){
        userService.signUpUser(userDto.toEntity(userDto));
        return ResponseEntity.ok().build();
    }


    @PostMapping("/jwttest")
    public ResponseEntity<?> jwtTest(@AuthenticationPrincipal PrincipalDetails principalDetails){
        System.out.println("principalDetails.getUser().getUserId() = " + principalDetails.getUser().getUserId());
        return ResponseEntity.ok().body(new HashMap<>(){{ put("userId", principalDetails.getUser().getUserId()); }});
    }





}