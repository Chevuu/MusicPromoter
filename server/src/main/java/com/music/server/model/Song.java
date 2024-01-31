package com.music.server.model;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "songs")
public class  Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String artist;
    private String songUrl;
    private String teaserUrl;
    private Instant timeAdded;

    public Song() {}

    public Song(String title, String artist, String songUrl, String teaserUrl) {
        this.title = title;
        this.artist = artist;
        this.songUrl = songUrl;
        this.teaserUrl = teaserUrl;
        this.timeAdded = Instant.now();
    }

    public Song(SongData songData) {
        this.title = songData.getTitle();
        this.artist = songData.getArtist();
        this.songUrl = songData.getSongUrl();
        this.teaserUrl = songData.getTeaserUrl();
        this.timeAdded = Instant.now();
    }

    public String getTitle() {
        return title;
    }
}
