package com.music.server.controller;

import com.music.server.model.Song;
import com.music.server.model.SongData;
import com.music.server.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RequestMapping("/song")
public class SongController {

    @Autowired
    private SongService songService;

    @PostMapping(path = "/add", consumes = "application/json")
    public ResponseEntity<?> addSong(@RequestBody SongData songData) {
        Song song = new Song(songData);
        String message = songService.addSong(song);
        return ResponseEntity.ok().body(message);
    }

    @DeleteMapping(path = "/clearAll", consumes = "application/json")
    public ResponseEntity<?> deleteAllSongs() {
        String message = songService.deleteAll();
        return ResponseEntity.ok().body(message);
    }

//    @GetMapping(path = "/getAll", consumes = "application/json")
//    public ResponseEntity<?> getAllSongsAndTeasers() {
//
//    }
}
