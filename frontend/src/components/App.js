import "./App.css";
import { useState, useEffect } from "react";
import PlayerForm from "./Player/PlayerForm";
import PlayerSingle from "./Player/PlayerSingle";
import PlayerList from "./Player/PlayerList";
import axios from "axios";

function App() {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/players")
      .then((Response) => {
        setPlayers(Response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateCurrentPlayer = (item) => {
    setCurrentPlayer(item);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s12"></div>
      </div>
      <div className="row">
        <div className="col s3">
          <PlayerList
            players={players}
            updateCurrentPlayer={updateCurrentPlayer}
          />
        </div>
        <div className="col s9">
          <PlayerSingle player={currentPlayer} />
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <PlayerForm />
        </div>
      </div>
    </div>
  );
}

export default App;
