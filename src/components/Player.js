import React, { useState } from 'react';
import '../styles/player.css'; // Make sure this path is correct

const Player = ({ title, songUrl, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  let audioRef = React.createRef();

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="player">
      <img src={`${process.env.PUBLIC_URL}/media/thumbnails/${thumbnail}`} alt={title} className="thumbnail" />
      <button onClick={togglePlay} className={`play-button ${isPlaying ? 'playing' : ''}`}>
        {isPlaying ? '||' : '▶'} {/* Simple text symbols for play/pause */}
      </button>
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/media/songs/${songUrl}`} onEnded={() => setIsPlaying(false)} />
    </div>
  );
};

export default Player;
