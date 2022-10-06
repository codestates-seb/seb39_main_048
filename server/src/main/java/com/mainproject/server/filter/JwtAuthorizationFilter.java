package com.mainproject.server.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.mainproject.server.auth.PrincipalDetails;
import com.mainproject.server.user.entity.User;
import com.mainproject.server.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@RequiredArgsConstructor
public class JwtAuthorizationFilter extends OncePerRequestFilter {

    private final UserRepository userRepository;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {

        String jwtHeader = request.getHeader("Authorization");

        if(jwtHeader ==null || !jwtHeader.startsWith("Bearer") || jwtHeader.startsWith("Bearer null")){
            chain.doFilter(request,response);
            return;
        }
        String jwtToken = request.getHeader("Authorization").replace("Bearer ","");

        String userId = JWT.require(Algorithm.HMAC512("safari")).build().verify(jwtToken).getClaim("userId").asString();

        if(userId != null){
            User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("멤버 없음"));
            PrincipalDetails principalDetails = new PrincipalDetails(user);
            Authentication authentication =
                    new UsernamePasswordAuthenticationToken(principalDetails,null,principalDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
            chain.doFilter(request,response);
        }
    }
}