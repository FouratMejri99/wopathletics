import React, { useState } from "react";
import "./FootballField.css";
import PlayerCard from "./PlayerCard";

const FootballField = () => {
  // Sample data for players
  const [players, setPlayers] = useState([
    { id: 1, name: "Player 1", position: "GK", team: "Team A" },
    { id: 2, name: "Player 2", position: "DEF", team: "Team A" },
    { id: 3, name: "Player 3", position: "MID", team: "Team A" },
    { id: 4, name: "Player 4", position: "FWD", team: "Team A" },
    // Add more players as needed
  ]);

  const [substitutes, setSubstitutes] = useState([
    { id: 5, name: "Sub 1", position: "DEF", team: "Team A" },
    { id: 6, name: "Sub 2", position: "MID", team: "Team A" },
    // Add more substitutes as needed
  ]);

  // Handle drag start for players
  const handleDragStart = (e, player) => {
    e.dataTransfer.setData("player", JSON.stringify(player));
  };

  // Handle drop on the field
  const handleDrop = (e, position) => {
    e.preventDefault();
    const player = JSON.parse(e.dataTransfer.getData("player"));
    console.log(`Dropped ${player.name} at ${position}`);
    // Add logic to update player positions
  };

  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="football-field-container">
      {/* Football Field */}
      <div className="football-field" onDragOver={handleDragOver}>
        {/* Goalkeeper */}
        <div
          className="position gk"
          onDrop={(e) => handleDrop(e, "GK")}
          onDragOver={handleDragOver}
        >
          {players
            .filter((player) => player.position === "GK")
            .map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                onDragStart={handleDragStart}
              />
            ))}
        </div>

        {/* Defenders */}
        <div
          className="position def"
          onDrop={(e) => handleDrop(e, "DEF")}
          onDragOver={handleDragOver}
        >
          {players
            .filter((player) => player.position === "DEF")
            .map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                onDragStart={handleDragStart}
              />
            ))}
        </div>

        {/* Midfielders */}
        <div
          className="position mid"
          onDrop={(e) => handleDrop(e, "MID")}
          onDragOver={handleDragOver}
        >
          {players
            .filter((player) => player.position === "MID")
            .map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                onDragStart={handleDragStart}
              />
            ))}
        </div>

        {/* Forwards */}
        <div
          className="position fwd"
          onDrop={(e) => handleDrop(e, "FWD")}
          onDragOver={handleDragOver}
        >
          {players
            .filter((player) => player.position === "FWD")
            .map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                onDragStart={handleDragStart}
              />
            ))}
        </div>
      </div>

      {/* Substitutes */}
      <div className="substitutes">
        <h3>Substitutes</h3>
        <div className="substitutes-list">
          {substitutes.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onDragStart={handleDragStart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FootballField;
