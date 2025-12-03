package com.spellhelp.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class HelloController {

    // "origins" matches your Angular URL
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/hello")
    public String sayHello() {
        return "Hello from Modern Spring Boot 3!";
    }
}