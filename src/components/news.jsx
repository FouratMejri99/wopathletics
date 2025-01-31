import axios from "axios";
import React, { useEffect, useState } from "react";

const Newstable = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://allsportsapi2.p.rapidapi.com/api/tournament/7/season/61644/best-players/per-game",
          headers: {
            "X-RapidAPI-Key":
              "feefcc69femsh42746ce53ccd162p183f95jsnd3c840da2755", // Replace with your API key
            "X-RapidAPI-Host": "allsportsapi2.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        console.log("API Response:", response.data); // Log the response

        // Extract the players array from the nested structure
        if (response.data.topPlayers && response.data.topPlayers.rating) {
          setPlayers(response.data.topPlayers.rating);
        } else {
          setError("No players data found");
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Best Players Per Game</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.player.name}</td>
              <td>{player.player.position}</td>
              <td>{player.player.jerseyNumber}</td>{" "}
              {/* Add team if available */}
              <td>{player.statistic}</td> {/* Rating */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Newstable;
