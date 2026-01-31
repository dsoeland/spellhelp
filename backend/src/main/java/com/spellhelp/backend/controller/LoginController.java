package com.spellhelp.backend.controller;

import com.spellhelp.backend.dto.LoginDto;
import com.spellhelp.backend.service.JwtAuthService;
import com.spellhelp.backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth/")
public class LoginController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtAuthService jwtAuthService;

    public LoginController(UserService userService, AuthenticationManager authenticationManager, JwtAuthService jwtAuthService) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtAuthService = jwtAuthService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> authUser(@Valid @RequestBody LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtAuthService.generateJwtToken(authentication);
        return new ResponseEntity<>(jwt, HttpStatus.OK);
    }
}
