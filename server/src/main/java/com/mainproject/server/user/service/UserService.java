package com.mainproject.server.user.service;

import com.mainproject.server.user.entity.User;
import com.mainproject.server.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.DelegatingPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    public void signUpUser(User user){
        //1.회원가입 되어있는지 확인
        verifyExistsId(user);
        //2. 회원가입이 되있지않다면 가입
        user.setRole("USER");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }


    private void verifyExistsId(User user)  {
        Optional<User> userEntity = userRepository.findById(user.getUserId());
        if(userEntity.isPresent()){
            throw new RuntimeException("멤버가 이미 존재합니다");
        }
    }

}
