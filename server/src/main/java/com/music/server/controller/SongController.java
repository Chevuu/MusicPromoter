package com.music.server.controller;

import com.music.server.model.Song;
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
    public ResponseEntity<?> loginUser(@RequestBody Song song) {
        String addMessage = songService.addSong(song);
        return ResponseEntity.ok().body(addMessage);
    }
}
