import React from "react";
import Soccer from "../../assets/images/soccerplayer.jpg";

const PlayerSingle = ({ player }) => {
  return (
    <div className="row">
      <div className="col s8 m7">
        <div className="card">
          <div className="card-image">
            <img src={Soccer} alt="Soccer" />
            <span className="card-title">
              {player.firstName} {player.lastName}
            </span>
          </div>
          <div className="card-content">
            <p>
              Phone : {player.phone} - Email : {player.email}
            </p>
            <p>
              Strength : {player.strength} - Endurance : {player.endurance}
            </p>
          </div>
          <div className="card-action">{player.team}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSingle;
