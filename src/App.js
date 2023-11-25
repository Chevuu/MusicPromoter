import React, { useState } from 'react';
import Player from './components/Player';
import './index.css';

const App = () => {
  const [playingId, setPlayingId] = useState(null);

  const handlePlayRequest = (id) => {
    if (playingId !== id) {
      setPlayingId(id);
    }
  };

  const players = new Array(16).fill(null).map((_, index) => ({
    id: index + 1,
    title: `Song ${index + 1}`,
    songUrl: `song${index + 1}.mp3`,
    thumbnailUrl: `thumbnail${index + 1}.jpg`,
  }));

  return (
    <div className="app">
      {players.map((player) => (
        <Player
          key={player.id}
          id={player.id}
          isPlaying={player.id === playingId}
          onPlayRequest={handlePlayRequest}
          title={player.title}
          songUrl={player.songUrl}
          thumbnail={player.thumbnailUrl}
        />
      ))}
    </div>
  );
};

export default App;
