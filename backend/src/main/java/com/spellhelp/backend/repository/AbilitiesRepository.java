package com.spellhelp.backend.repository;

import com.spellhelp.backend.entity.Abilities;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AbilitiesRepository extends JpaRepository<Abilities, Long> {

}
