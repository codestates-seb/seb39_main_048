package com.mainproject.server.config;

import com.mainproject.server.auth.CustomAuthenticationManager;
import com.mainproject.server.filter.JwtAuthenticationFilter;
import com.mainproject.server.filter.JwtAuthorizationFilter;
import com.mainproject.server.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    //private final CustomAuthenticationManager authenticationManager;
     private final UserRepository userRepository;
     private final CorsFilter corsFilter;


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http.addFilter(corsFilter);
        http.csrf().disable();
        http.headers().frameOptions().disable();
        http.formLogin().disable();
        http.httpBasic().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.apply(new MyCustomDsl());
      
        http.authorizeRequests()
                .anyRequest().permitAll();
        return http.build();
    }
    public class MyCustomDsl extends AbstractHttpConfigurer<MyCustomDsl, HttpSecurity> {
        // java 11 버전인데 deprecated 된거 못써서 이런거 찾아서 썻다.
        // 이런것도 경험 이버전 이기술에대한 로직을 안다면 이걸안씀
        // docs에서 계속 찾기 흠..
        @Override
        public void configure(HttpSecurity http) throws Exception {
            AuthenticationManager authenticationManager = http.getSharedObject(AuthenticationManager.class);
            //JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager());
            //JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager);
            //jwtAuthenticationFilter.setFilterProcessesUrl("/api/v1/login");
            http.addFilter(new JwtAuthenticationFilter(authenticationManager));
            http.addFilterAfter(new JwtAuthorizationFilter(userRepository), UsernamePasswordAuthenticationFilter.class);
        }
    }
   /* @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager);
        jwtAuthenticationFilter.setFilterProcessesUrl("/api/v1/login");
        return jwtAuthenticationFilter;
    }*/


    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }


}
