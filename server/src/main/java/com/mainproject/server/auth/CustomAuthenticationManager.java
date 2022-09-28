package com.mainproject.server.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CustomAuthenticationManager implements AuthenticationManager {

    private final PrincipalDetailsService principalDetailsService;
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        PrincipalDetails principalDetails = (PrincipalDetails) principalDetailsService.loadUserByUsername((String) authentication.getPrincipal());
        return new UsernamePasswordAuthenticationToken(principalDetails,null,principalDetails.getAuthorities());
    }
}
