package com.mainproject.server.user.service;

import com.mainproject.server.user.entity.User;
import com.mainproject.server.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.DelegatingPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    public User findUser(User user) {
        Optional<User> userEntity = userRepository.findById(user.getUserId());
        return userEntity.orElseThrow(() -> new RuntimeException("멤버가 존재하지 않습니다."));
    }

    @Transactional
    public User updatedUser(User afterUser, User beforeUser) {
        Optional<User> optionalUser = userRepository.findById(beforeUser.getUserId());
        User findUser =
                optionalUser.orElseThrow(() -> new RuntimeException("존재하지 않는 회원입니다."));

        Optional.ofNullable(afterUser.getName())
                .ifPresent(name -> findUser.setName(name));

        Optional.ofNullable(afterUser.getUserImage())
                .ifPresent(userImage -> findUser.setUserImage(userImage));

        Optional.ofNullable(afterUser.getPassword())
                .ifPresent(password -> findUser.setPassword(password));

        return userRepository.save(findUser);
    }

    @Transactional
    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
