package com.spellhelp.backend.service;

import com.spellhelp.backend.entity.User;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {

    User registerUser(User user);
    UserDetails loadUserByUsername(String email);
}
