import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Player from "./components/Player";
import LogIn from "./components/LogIn";
import "./index.css";
// Import other pages/components here

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
    <Router>
      <div className="app">
        <div className="sidebar">
          <Link to="/login">Log in</Link>
          <Link to="/">All Songs</Link>
          <Link to="/my-songs">My Songs</Link>
          <Link to="/settings">Settings</Link>
        </div>
        <Routes>
            <Route
            
              path="/"
              element={
                <div className="main-content content">
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
              }
            />
            <Route path="/my-songs" element={<div className="main-content">My Songs Page</div>} />
            <Route path="/login" element={<div className="main-content"><LogIn/></div>} />
            <Route path="/settings" element={<div className="main-content">Settings</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
