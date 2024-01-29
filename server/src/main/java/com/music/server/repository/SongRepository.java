package com.music.server.repository;

import com.music.server.model.Song;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface SongRepository extends CrudRepository<Song, Long> {

    Optional<Song> findByTitle(String title);

    Optional<Song> findBySongUrl(String songUrl);

    Optional<Song> findByTeaserUrl(String teaserUrl);
}