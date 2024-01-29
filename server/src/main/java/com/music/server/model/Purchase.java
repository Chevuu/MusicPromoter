package com.music.server.model;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "purchases")
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long user_id;

    private Long Song_id;

    private Instant purchaseDate;

    public Purchase(Long user_id, Long song_id, Instant purchaseDate) {
        this.user_id = user_id;
        Song_id = song_id;
        this.purchaseDate = purchaseDate;
    }

    public Purchase() { }
}
