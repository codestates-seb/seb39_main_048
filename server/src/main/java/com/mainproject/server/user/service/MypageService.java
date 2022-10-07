package com.mainproject.server.user.service;

import com.mainproject.server.user.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class MypageService {

    private final UserRepository userRepository;

    public MypageService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


}
