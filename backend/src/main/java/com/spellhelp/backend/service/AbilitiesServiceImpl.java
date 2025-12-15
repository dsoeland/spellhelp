package com.spellhelp.backend.service;

import com.spellhelp.backend.entity.Abilities;
import com.spellhelp.backend.repository.AbilitiesRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AbilitiesServiceImpl implements AbilitiesService {

    private AbilitiesRepository abilitiesRepository;

    @Autowired
    public AbilitiesServiceImpl(AbilitiesRepository abilitiesRepository) {
        this.abilitiesRepository = abilitiesRepository;
    }

    @Override
    public List<Abilities> findAll() {
        return abilitiesRepository.findAll();
    }

    @Override
    public Abilities findById(Long id){
        Optional<Abilities> abilities = abilitiesRepository.findById(id);
        Abilities ability = null;
        if(abilities.isPresent()){
            ability = abilities.get();
        }else{
            throw new EntityNotFoundException("Abilities Not Found");
        }
        return ability;
    }

    @Override
    @Transactional
    public Abilities saveAbility(Abilities abil) {
        if(abil.getId()==null){
            return abilitiesRepository.save(abil);
        }else {
            Abilities existingAbility = abilitiesRepository.findById(abil.getId()).orElseThrow(() -> new EntityNotFoundException("Ability Not Found"));
            existingAbility.setName(abil.getName());
            existingAbility.setKeybind(abil.getKeybind());
            return abilitiesRepository.save(existingAbility);
        }
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        abilitiesRepository.deleteById(id);
    }
}
