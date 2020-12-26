import React, { useEffect, useState } from "react";
import Login from "./Login";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

import { useDataLayerValue } from "./datalayer";

const Spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run the code when something change

  useEffect(() => {
    // hash - will be an Object
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      Spotify.setAccessToken(_token);
      // it sets the promise
      Spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      // Code for getting playlist from spotify
      Spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: playlist,
        });
      });

      // code for getting weekly discover feed
      Spotify.getPlaylist("37i9dQZEVXcRm5Ey35QdJF")
        .then((response) => {
          dispatch({
            type: "SET DISCOVER_WEEKLY",
            discover_weekly: response,
          });
        })
        .catch((e) => console.log(e));
    }
    console.log("My token is :", hash);
  }, []);
  console.log("user is :", user);
  console.log("token", token);
  return (
    <div className="App">
      {/* Condtional Rendering of component */}

      {token ? <Player spotify={Spotify} /> : <Login />}
    </div>
  );
}

export default App;
