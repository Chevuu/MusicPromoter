package com.music.server.service;

import com.music.server.model.Song;
import com.music.server.repository.SongRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SongService {
    private static final Logger log = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private SongRepository songRepository;

    public String addSong (Song song) {
        songRepository.save(song);
        log.info("Song: {} is saved to the database", song.getTitle());
        return "Song saved successfully.";
    }

    public String deleteAll () {
        songRepository.deleteAll();
        log.info("All songs have been deleted from the database.");
        return "All songs have been deleted from the database.";
    }

}
