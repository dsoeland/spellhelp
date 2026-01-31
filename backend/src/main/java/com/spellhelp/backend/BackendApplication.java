package com.spellhelp.backend;

import com.spellhelp.backend.entity.Abilities;
import com.spellhelp.backend.entity.User;
import com.spellhelp.backend.repository.AbilitiesRepository;
import com.spellhelp.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    CommandLineRunner run(AbilitiesRepository abilitiesRepository, UserRepository userRepository) {
        return args -> {
            if(abilitiesRepository.count() == 0 && (userRepository.count() == 0)) {
                abilitiesRepository.save(new Abilities("Holy Shock", "f"));
                abilitiesRepository.save(new Abilities("Holy Radiance", "d"));
                abilitiesRepository.save(new Abilities("Holy Light", "s"));
                abilitiesRepository.save(new Abilities("Flash of Light", "a"));

                userRepository.save(new User("BigD", "BigS", "email@gmail.com", "$2a$12$mDJgC/6rop0ZHvO6IGH1AecmEkodyJgnUpUjA87BBWmsFDZX3rEvC"));
                System.out.println("Abilities Saved to database.");
            }
        };
    }

}
