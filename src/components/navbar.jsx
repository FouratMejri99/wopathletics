import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import logo from "../assets/logo.png";

export default function ButtonAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "red", margin: 0 }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          minHeight: "40px",
          padding: "0 10px",
        }}
      >
        {/* Left Side: Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton edge="start" color="inherit" sx={{ padding: 0 }}>
            <img src={logo} alt="Logo" style={{ height: "70px" }} />
          </IconButton>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
        </Box>

        {/* Right Side: Language Selector */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button color="inherit">FR</Button>
          <Button color="inherit">EN</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
