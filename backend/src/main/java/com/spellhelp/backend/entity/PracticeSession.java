package com.spellhelp.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "practiceSession")
public class PracticeSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "percentCorrect")
    private int percentCorrect;

    @Column(name = "totalTime")
    private int totalTime;

    public PracticeSession() {
    }

    public PracticeSession(Long id, int percentCorrect, int totalTime) {
        this.id = id;
        this.percentCorrect = percentCorrect;
        this.totalTime = totalTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getPercentCorrect() {
        return percentCorrect;
    }

    public void setPercentCorrect(int percentCorrect) {
        this.percentCorrect = percentCorrect;
    }

    public int getTotalTime() {
        return totalTime;
    }

    public void setTotalTime(int totalTime) {
        this.totalTime = totalTime;
    }
}
