package com.rapidrescue.rapid_rescue.controller;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.rapidrescue.rapid_rescue.model.Role;
import com.rapidrescue.rapid_rescue.model.User;
import com.rapidrescue.rapid_rescue.model.dto.AuthenticationResponse;
import com.rapidrescue.rapid_rescue.model.dto.LoginRequest;
import com.rapidrescue.rapid_rescue.model.dto.LoginResponse;
import com.rapidrescue.rapid_rescue.model.dto.RegisterRequest;
import com.rapidrescue.rapid_rescue.repository.UserRepository;
import com.rapidrescue.rapid_rescue.security.CustomUserDetailsService;
import com.rapidrescue.rapid_rescue.security.JwtUtil;
import com.rapidrescue.rapid_rescue.service.AuthenticationService;
import com.rapidrescue.rapid_rescue.service.TokenBlacklistService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired 
    private HttpServletRequest request;

    @Autowired
    private JwtUtil jwtUtil;


    @Autowired
    private TokenBlacklistService tokenBlacklistService;

    public AuthController(AuthenticationManager authenticationManager,
                          CustomUserDetailsService userDetailsService,
                          JwtUtil jwtUtil,
                          UserRepository userRepository,
                          PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) {
               try {
            String token = authenticationService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
            org.springframework.security.core.Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            User user = userRepository.findByEmail(loginRequest.getEmail());
            if (user == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
    
            // Lấy vai trò của người dùng
            String role = user.getRole().name();
            String username = (user.getName());

            Cookie cookie = new Cookie("token", token);
            cookie.setMaxAge(60*60);
            cookie.setPath("/");
            response.addCookie(cookie);
            
            return ResponseEntity.ok(new LoginResponse(token,role,username));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        User newUser = new User();
            newUser.setEmail(registerRequest.getEmail());
            newUser.setPasswordHash(passwordEncoder.encode(registerRequest.getPassword()));
            newUser.setName(registerRequest.getName()); // Đảm bảo truyền vào trường name
            newUser.setRole(Role.USER);
        userRepository.save(newUser);

        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response){
        String authToken = request.getHeader("Authorization");
        if (authToken != null && authToken.startsWith("Bearer ")) {
            String token = authToken.substring(7);
            // vô hiệu hóa token
            tokenBlacklistService.blacklistToken(token);

            // Xóa cookie
            Cookie cookie = new Cookie("token", null);
            cookie.setMaxAge(0);
            cookie.setPath("/");
            response.addCookie(cookie);

            return ResponseEntity.ok("Logout successful");
        }
        return ResponseEntity.badRequest().body("Invalid token");
    }
}
