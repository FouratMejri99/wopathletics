import SportsBasketballIcon from "@mui/icons-material/SportsBasketball"; // Basketball icon
import SportsCricketIcon from "@mui/icons-material/SportsCricket"; // Cricket icon
import SportsHockeyIcon from "@mui/icons-material/SportsHockey"; // Hockey icon
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts"; // Martial Arts icon
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer"; // Soccer icon
import SportsTennisIcon from "@mui/icons-material/SportsTennis"; // Tennis icon
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball"; // Volleyball icon
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const SubNavbar = () => {
  // List of sports with their icons
  const sports = [
    { name: "Soccer", icon: <SportsSoccerIcon /> },
    { name: "Basketball", icon: <SportsBasketballIcon /> },
    { name: "Tennis", icon: <SportsTennisIcon /> },
    { name: "Volleyball", icon: <SportsVolleyballIcon /> },
    { name: "Cricket", icon: <SportsCricketIcon /> },
    { name: "Hockey", icon: <SportsHockeyIcon /> },
    { name: "Martial Arts", icon: <SportsMartialArtsIcon /> },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#333333",
        margin: 0,
        boxShadow: "none",
        height: "50px", // Slightly taller for better spacing
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
          minHeight: "50px", // Match the AppBar height
          padding: "0 20px", // Add horizontal padding
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 4, // Increase gap between items
            alignItems: "center",
            overflowX: "auto", // Add horizontal scrollbar for smaller screens
            whiteSpace: "nowrap", // Prevent text wrapping
            "&::-webkit-scrollbar": {
              height: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "5px",
            },
          }}
        >
          {sports.map((sport, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1, // Space between icon and text
                cursor: "pointer",
                padding: "8px 12px", // Add padding for better click area
                borderRadius: "4px", // Rounded corners
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Light hover effect
                },
              }}
            >
              {React.cloneElement(sport.icon, {
                sx: { fontSize: "24px", color: "white" }, // Larger icons
              })}
              <Typography
                variant="body1" // Slightly larger text
                sx={{
                  color: "white",
                  fontWeight: "500", // Medium font weight
                  fontSize: "14px", // Consistent font size
                }}
              >
                {sport.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SubNavbar;
