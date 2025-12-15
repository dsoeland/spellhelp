package com.spellhelp.backend.service;

import com.spellhelp.backend.entity.Abilities;

import java.util.List;

public interface AbilitiesService {

    public List<Abilities> findAll();
    public Abilities findById(Long id);
    public Abilities saveAbility(Abilities ability);
    public void deleteById(Long id);
}
