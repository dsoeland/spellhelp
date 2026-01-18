package com.spellhelp.backend;

import com.spellhelp.backend.entity.Abilities;
import com.spellhelp.backend.repository.AbilitiesRepository;
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
    CommandLineRunner run(AbilitiesRepository abilitiesRepository) {
        return args -> {
            if(abilitiesRepository.count() == 0) {
                abilitiesRepository.save(new Abilities("Holy Shock", "f"));
                abilitiesRepository.save(new Abilities("Holy Radiance", "d"));
                abilitiesRepository.save(new Abilities("Holy Light", "s"));
                abilitiesRepository.save(new Abilities("Flash of Light", "a"));
                System.out.println("Abilities Saved to database.");
            }
        };
    }

}
