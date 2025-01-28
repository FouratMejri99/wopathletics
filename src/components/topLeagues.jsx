import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

// Sample top football leagues data
const topLeagues = [
  {
    id: 1,
    name: "Premier League",
    country: "England",
    logo: "https://example.com/premier-league-logo.png",
  },
  {
    id: 2,
    name: "La Liga",
    country: "Spain",
    logo: "https://example.com/la-liga-logo.png",
  },
  {
    id: 3,
    name: "Bundesliga",
    country: "Germany",
    logo: "https://example.com/bundesliga-logo.png",
  },
  {
    id: 4,
    name: "Serie A",
    country: "Italy",
    logo: "https://example.com/serie-a-logo.png",
  },
  {
    id: 5,
    name: "Ligue 1",
    country: "France",
    logo: "https://example.com/ligue-1-logo.png",
  },
];

const TopLeagues = () => {
  return (
    <Paper sx={{ marginTop: 4, boxShadow: 3, padding: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Top Football Leagues
      </Typography>
      <List>
        {topLeagues.map((league, index) => (
          <React.Fragment key={league.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={league.name} src={league.logo} />
              </ListItemAvatar>
              <ListItemText
                primary={league.name}
                secondary={league.country}
                primaryTypographyProps={{ fontWeight: "bold" }}
              />
            </ListItem>
            {index < topLeagues.length - 1 && <Divider variant="inset" />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default TopLeagues;
