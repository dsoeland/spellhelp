package com.spellhelp.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spellhelp.backend.dto.LoginDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class LoginControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void login_WithValidCredentials() throws Exception {
        LoginDto loginDto = new LoginDto();
        loginDto.setUsername("email@gmail.com");
        loginDto.setPassword("1234");

        mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginDto)))
                .andExpect(status().isOk());
    }

    @Test
    public void login_WithInvalidCredentials_emailFormat() throws Exception {
        LoginDto loginDto = new LoginDto();
        loginDto.setUsername("email");
        loginDto.setPassword("1234");

        mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginDto)))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void login_WithInvalidCredentials_emailNotFound() throws Exception {
        LoginDto loginDto = new LoginDto();
        loginDto.setUsername("emailfake@gmail.com");
        loginDto.setPassword("1234");

        mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginDto)))
                .andExpect(status().isUnauthorized())
                .andDo(print()) ;
    }

    @Test
    public void login_WithMissingCredentials_email() throws Exception {
        LoginDto loginDto = new LoginDto();
        loginDto.setUsername("");
        loginDto.setPassword("1234");

        mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginDto)))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void login_WithMissingCredentials_NullEmail() throws Exception {
        LoginDto loginDto = new LoginDto();
        loginDto.setUsername(null);
        loginDto.setPassword("1234");

        mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginDto)))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void login_WithRawCredentials_passwordMissing() throws Exception {
        String malformedJson = "{\"username\":\"email@gmail.com\"}";

        mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(malformedJson))
                .andExpect(status().isBadRequest());
    }






    @Test
    public void login_WithInvalidCredentials_password() throws Exception {
        LoginDto loginDto = new LoginDto();
        loginDto.setUsername("email@gmail.com");
        loginDto.setPassword("BigS");

        mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginDto)))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void login_WithMissingCredentials_password() throws Exception {
        LoginDto loginDto = new LoginDto();
        loginDto.setUsername("email@gmail.com");
        loginDto.setPassword("");

        mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginDto)))
                .andExpect(status().isBadRequest())
                .andDo(print());
    }

}
