import React, { useState } from "react";
import Player from "./components/Player";
import LogIn from "./components/LogIn";
import CreateAccount from "./components/CreateAccount";
import "./index.css";
import SongPurchase from "./components/SongPurchase";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./logic/AuthContext";

const App = () => {
  const [playingId, setPlayingId] = useState(null);
  const { isLoggedIn, setLoggedIn } = useAuth();
  const [showMask, setShowMask] = useState(false);

  const logout = () => {
    setLoggedIn(false);
  };

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
          {!isLoggedIn && <Link to="/login">Log in</Link>}
          {isLoggedIn && (
            <>
              <Link to="/">All Songs</Link>
              <Link to="/my-songs">My Songs</Link>
            </>
          )}
          <Link to="/settings">Settings</Link>
          {isLoggedIn && (
            <Link to="/login" onClick={logout}>
              Log Out
            </Link>
          )}
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className={`main-content content ${showMask ? "mask" : ""}`}>
                {showMask && <SongPurchase setShowMask={setShowMask} />}
                {players.map((player) => (
                  <Player
                    key={player.id}
                    id={player.id}
                    isPlaying={player.id === playingId}
                    onPlayRequest={handlePlayRequest}
                    title={player.title}
                    songUrl={player.songUrl}
                    thumbnail={player.thumbnailUrl}
                    setShowMask={setShowMask}
                  />
                ))}
              </div>
            }
          />
          <Route
            path="/my-songs"
            element={<div className="main-content">My Songs Page</div>}
          />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate replace to="/" />
              ) : (
                <div className="main-content">
                  <LogIn />
                </div>
              )
            }
          />
          <Route
            path="/create-account"
            element={
              <div className="main-content">
                <CreateAccount />
              </div>
            }
          />
          <Route
            path="/settings"
            element={<div className="main-content">Settings</div>}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
