import React from "react";
import "./PlayerCard.css";

const PlayerCard = ({ player, onDragStart }) => {
  return (
    <div
      className="player-card"
      draggable={!!onDragStart} // Make draggable if onDragStart is provided
      onDragStart={(e) => onDragStart && onDragStart(e, player)}
    >
      <div className="player-name">{player.name}</div>
      <div className="player-position">{player.position}</div>
      <div className="player-team">{player.team}</div>
    </div>
  );
};

export default PlayerCard;
