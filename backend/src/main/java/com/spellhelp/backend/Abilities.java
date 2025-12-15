package com.spellhelp.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Abilities {

    private final String[] abilities;

    public Abilities() {
        this.abilities = new String[]{"Holy Light", "Holy Shock", "Flash of Light"};
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("api/abilities")
    public String[] ability() {
        System.out.println("Backend accessed");
        return abilities;
    }
}
