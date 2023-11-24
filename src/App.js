import React from 'react';
import Player from './components/Player';
import './index.css';

const App = () => {
  const players = new Array(15).fill(null).map((_, index) => ({
    id: index + 1,
    title: `Sample Song ${index + 1}`,
    songUrl: `song${index + 1}.mp3`,
    thumbnailUrl: `thumbnail${index + 1}.jpg`,
  }));

  return (
    <div className="app">
      {players.map((player) => (
        <Player
          key={player.id}
          title={player.title}
          sampleUrl={player.songUrl}
          thumbnail={player.thumbnailUrl}
        />
      ))}
    </div>
  );
};

export default App;
