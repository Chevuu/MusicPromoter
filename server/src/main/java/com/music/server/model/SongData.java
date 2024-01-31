package com.music.server.model;

public class  SongData {

    private String title;
    private String artist;
    private String songUrl;
    private String teaserUrl;

    public SongData(String title, String artist, String songUrl, String teaserUrl) {
        this.title = title;
        this.artist = artist;
        this.songUrl = songUrl;
        this.teaserUrl = teaserUrl;
    }

    public String getTitle() {
        return title;
    }

    public String getArtist() {
        return artist;
    }

    public String getSongUrl() {
        return songUrl;
    }

    public String getTeaserUrl() {
        return teaserUrl;
    }
}
