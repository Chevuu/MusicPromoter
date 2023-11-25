import React, { useRef, useEffect } from 'react';
import '../styles/player.css';
// If you're using Font Awesome, import the library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Player = ({ id, title, songUrl, thumbnail, isPlaying, onPlayRequest }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset the audio track to the beginning
    }
  }, [isPlaying]);

  const togglePlay = () => {
    onPlayRequest(id);
  };

  return (
    <div className="player">
      <img src={`${process.env.PUBLIC_URL}/media/thumbnails/${thumbnail}`} alt={title} className="thumbnail" />
      <button onClick={togglePlay} className={`play-button ${isPlaying ? 'playing' : ''}`}>
        {isPlaying ? '||' : '▶'}
      </button>
      <div className="song-title">{title}</div>
      <button className="buy-button">
        <FontAwesomeIcon icon={faLock} /> Buy
      </button>
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/media/songs/${songUrl}`} onEnded={() => onPlayRequest(null)} />
    </div>
  );
};

export default Player;
