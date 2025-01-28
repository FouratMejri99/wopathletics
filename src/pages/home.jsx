import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import BasicDateCalendar from "../components/calendaretable";
import LiveScoresTable from "../components/livescoretable";
import NewsTable from "../components/news";
import TopLeagues from "../components/topLeagues";
import "../styles/Home.css"; // Import CSS for animations

export default function Home() {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "red" }}>
      <CardContent sx={{ backgroundColor: "white" }}>
        <Grid container spacing={2}>
          {/* Left Column: Calendar and Top Leagues */}
          <Grid item xs={12} md={3}>
            <Grid container direction="column" spacing={2}>
              {/* Calendar */}
              <Grid item>
                <BasicDateCalendar />
              </Grid>
              {/* Top Leagues */}
              <Grid item>
                <TopLeagues />
              </Grid>
            </Grid>
          </Grid>

          {/* Center Column: Live Scores */}
          <Grid item xs={12} md={6}>
            <LiveScoresTable />
          </Grid>

          {/* Right Column: News */}
          <Grid item xs={12} md={3}>
            <NewsTable />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
