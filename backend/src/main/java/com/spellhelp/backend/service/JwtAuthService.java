package com.spellhelp.backend.service;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;

public interface JwtAuthService {

    public String generateJwtToken(Authentication authentication);
    public String extractUsername(String token);
    public boolean validateJwtToken(String token, UserDetails userDetails);
}
