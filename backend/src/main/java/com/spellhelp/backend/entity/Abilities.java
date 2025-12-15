package com.spellhelp.backend.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "abilities")
public class Abilities {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "keybind")
    private String keybind;

    public Abilities() {

    }

    public Abilities(String name, String keybind) {

        this.name = name;
        this.keybind = keybind;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getKeybind() {
        return keybind;
    }
    public void setKeybind(String keybind) {
        this.keybind = keybind;
    }
}
