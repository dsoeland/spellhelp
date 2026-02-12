package com.spellhelp.backend.controller;

import com.spellhelp.backend.entity.Abilities;
import com.spellhelp.backend.service.AbilitiesService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AbilitiesController {

    @Autowired
    private final AbilitiesService abilitiesService;

    public AbilitiesController(AbilitiesService abilitiesService) {
        //this.abilities = new String[]{"Holy Light", "Holy Shock", "Flash of Light"};
        this.abilitiesService = abilitiesService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/abilities/{id}")
    public ResponseEntity<Abilities> getAbility(@PathVariable("id") Long id) {
        System.out.println("getAbility started");
        Abilities ability = abilitiesService.findById(id);
        if (ability != null) {
            return new ResponseEntity<>(ability, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/abilities")
    public ResponseEntity<List<Abilities>> getAllAbilities() {
        List<Abilities> abilities = abilitiesService.findAll();
        if (abilities != null) {
            return new ResponseEntity<>(abilities, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/abilities")
    public ResponseEntity<Abilities> addAbilities(@Valid @RequestBody Abilities ability) {
        Abilities savedAbilities = abilitiesService.saveAbility(ability);
        return new ResponseEntity<>(savedAbilities, HttpStatus.CREATED);
    }

    @DeleteMapping("/abilities/{id}")
    public ResponseEntity<Void> deleteAbility(@PathVariable("id") Long id) {
        abilitiesService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
