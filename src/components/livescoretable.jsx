import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const LiveScoresTable = () => {
  const [liveMatches, setLiveMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [leagueId, setLeagueId] = useState(""); // State to store the selected league ID

  // Example list of leagues (replace with actual league IDs from the API documentation)
  const leagues = [
    { id: "1", name: "Premier League" },
    { id: "2", name: "La Liga" },
    { id: "3", name: "Bundesliga" },
    { id: "4", name: "Serie A" },
    { id: "5", name: "Ligue 1" },
  ];

  useEffect(() => {
    const fetchLiveMatches = async () => {
      if (!leagueId) return; // Don't fetch if no league is selected

      try {
        const response = await fetch(
          `https://allsportsapi2.p.rapidapi.com/api/matches/live?competitionId=${leagueId}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "feefcc69femsh42746ce53ccd162p183f95jsnd3c840da2755",
              "x-rapidapi-host": "allsportsapi2.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch live matches");
        }

        const data = await response.json();
        setLiveMatches(data.events); // Adjust according to the API response structure
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveMatches();
  }, [leagueId]); // Fetch data whenever the leagueId changes

  const handleLeagueChange = (event) => {
    setLeagueId(event.target.value); // Update the selected league ID
  };

  if (loading && leagueId) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: 4, boxShadow: 3, height: "810px" }}
    >
      <Typography variant="h5" sx={{ padding: 2, fontWeight: "bold" }}>
        Live Football Scores
      </Typography>

      {/* League Selection Dropdown */}
      <FormControl sx={{ margin: 2, minWidth: 200 }}>
        <InputLabel id="league-select-label">Select League</InputLabel>
        <Select
          labelId="league-select-label"
          value={leagueId}
          onChange={handleLeagueChange}
          label="Select League"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {leagues.map((league) => (
            <MenuItem key={league.id} value={league.id}>
              {league.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{ fontWeight: "bold" }}>Match</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Score</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {liveMatches.length > 0 ? (
            liveMatches.map((match) => (
              <TableRow key={match.id}>
                <TableCell>
                  {match.homeTeam.name} vs {match.awayTeam.name}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  {match.homeScore.current} - {match.awayScore.current}
                </TableCell>
                <TableCell>
                  <Chip
                    label={match.status.type}
                    color={
                      match.status.type === "inprogress"
                        ? "error" // Red for live matches
                        : match.status.type === "halftime"
                        ? "warning" // Yellow for half-time
                        : "primary" // Blue for other statuses
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>{match.time.current}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                No matches found for the selected league.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LiveScoresTable;
