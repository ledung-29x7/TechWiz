package com.rapidrescue.rapid_rescue.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.rapidrescue.rapid_rescue.service.TokenBlacklistService;

@Configuration
@EnableWebSecurity
public class SecurityConfig  {
 private UserDetailsService userDetailsService;
    private  JwtUtil jwtTokenUtil;
    private TokenBlacklistService tokenBlacklistService;

    public SecurityConfig(UserDetailsService userDetailsService, JwtUtil jwtTokenUtil, TokenBlacklistService tokenBlacklistService){
        this.userDetailsService=userDetailsService;
        this.jwtTokenUtil=jwtTokenUtil;
        this.tokenBlacklistService=tokenBlacklistService;
    }

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter(jwtTokenUtil, userDetailsService, tokenBlacklistService);
    }

    @Bean
    public static PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception{
        return configuration.getAuthenticationManager();
    }

    @Bean //phân quyền
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeHttpRequests((authorize) -> authorize
                        .requestMatchers("/api/auth/**").permitAll()
                        .requestMatchers("/api/admin/**").hasRole("ADMIN")
                        .requestMatchers("/api/driver/**").hasRole("DRIVER")
                        .requestMatchers("/api/user/**").hasRole("USER")
                        .anyRequest().authenticated()
                        .and()
                        .addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
                );

        return http.build();
    }
}

