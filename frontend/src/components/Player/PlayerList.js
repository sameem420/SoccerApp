import React from "react";

const PlayerList = ({ players, updateCurrentPlayer }) => {
  const renderPlayers = players.map((player) => {
    return (
      <a
        href="!#"
        key={player._id}
        onClick={() => updateCurrentPlayer(player)}
        className="collection-item"
      >
        {player.firstName} {player.lastName}
      </a>
    );
  });
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Players</h4>
      </li>
      {renderPlayers}
    </ul>
  );
};

export default PlayerList;
