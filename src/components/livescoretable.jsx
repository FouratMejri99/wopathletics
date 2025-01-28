import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

// Sample live football match data
const liveMatches = [
  {
    id: 1,
    teamA: "Team A",
    teamB: "Team B",
    score: "2 - 1",
    status: "Live",
    time: "45'",
  },
  {
    id: 2,
    teamA: "Team C",
    teamB: "Team D",
    score: "0 - 0",
    status: "1st Half",
    time: "23'",
  },
  {
    id: 3,
    teamA: "Team E",
    teamB: "Team F",
    score: "1 - 1",
    status: "Half Time",
    time: "HT",
  },
  {
    id: 4,
    teamA: "Team G",
    teamB: "Team H",
    score: "3 - 2",
    status: "2nd Half",
    time: "67'",
  },
];

const LiveScoresTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: 4, boxShadow: 3, height: "810px" }}
    >
      <Typography variant="h5" sx={{ padding: 2, fontWeight: "bold" }}>
        Live Football Scores
      </Typography>
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
          {liveMatches.map((match) => (
            <TableRow key={match.id}>
              <TableCell>
                {match.teamA} vs {match.teamB}
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>{match.score}</TableCell>
              <TableCell>
                <Chip
                  label={match.status}
                  color={
                    match.status === "Live"
                      ? "error" // Red for live matches
                      : match.status === "Half Time"
                      ? "warning" // Yellow for half-time
                      : "primary" // Blue for other statuses
                  }
                  size="small"
                />
              </TableCell>
              <TableCell>{match.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LiveScoresTable;
