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
import bundesliga from "../assets/Bundesliga.png";
import laliga from "../assets/laliga.png";
import ligue1 from "../assets/ligue1.png";
import premierleague from "../assets/premierleague.jpg";
import seriea from "../assets/serieA.png";

// Sample top football leagues data
const topLeagues = [
  {
    id: 1,
    name: "Premier League",
    country: "England",
    logo: premierleague,
  },
  {
    id: 2,
    name: "La Liga",
    country: "Spain",
    logo: laliga,
  },
  {
    id: 3,
    name: "Bundesliga",
    country: "Germany",
    logo: bundesliga,
  },
  {
    id: 4,
    name: "Serie A",
    country: "Italy",
    logo: seriea,
  },
  {
    id: 5,
    name: "Ligue 1",
    country: "France",
    logo: ligue1,
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
