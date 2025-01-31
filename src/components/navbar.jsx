import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { IconButton, styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag"; // For flags
import { IoNotificationsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure the path is correct
import SubNavbar from "./subnavbar"; // Ensure the path is correct

// Custom styled button for language selection
const LanguageButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export default function ButtonAppBar() {
  const [language, setLanguage] = useState("FR"); // Default language is FR
  const [isSubNavbarOpen, setIsSubNavbarOpen] = useState(false); // State to manage subnavbar visibility

  // Function to handle language change
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // Add logic to change the language of your app here
    console.log(`Language changed to: ${lang}`);
  };

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/"); // Navigate to the services page
  };

  const handleServicesClick = () => {
    navigate("/services"); // Navigate to the services page
  };

  const handleNewsClick = () => {
    navigate("/news"); // Navigate to the services page
  };

  const handleFantasieClick = () => {
    navigate("/fantasie");
  };

  // Function to toggle subnavbar visibility and icon
  const toggleSubNavbar = () => {
    setIsSubNavbarOpen(!isSubNavbarOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "red", margin: 0, height: "60px" }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: "40px",
            padding: "0 10px",
          }}
        >
          {/* Left Side: Navigation Links */}
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <IconButton
              edge="start"
              color="inherit"
              sx={{ padding: 0 }}
              onClick={toggleSubNavbar}
            >
              {isSubNavbarOpen ? (
                <FormatAlignCenterIcon />
              ) : (
                <FormatAlignLeftIcon />
              )}
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              sx={{ padding: 0 }}
              onClick={handleHomeClick}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ height: "70px", width: "90px" }}
              />
            </IconButton>
            <Button color="inherit" onClick={handleNewsClick}>
              News
            </Button>
            <Button color="inherit" onClick={handleFantasieClick}>
              Fantasie
            </Button>
            <Button color="inherit" onClick={handleServicesClick}>
              Services
            </Button>
          </Box>

          {/* Right Side: Language Selector */}
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Switch />
            <LanguageButton
              color="inherit"
              onClick={() => handleLanguageChange("FR")}
              sx={{
                backgroundColor:
                  language === "FR" ? "rgba(0, 0, 0, 0.1)" : "inherit",
              }}
            >
              <ReactCountryFlag
                countryCode="FR"
                svg
                style={{ fontSize: "1.5em" }}
              />
              FR
            </LanguageButton>
            <LanguageButton
              color="inherit"
              onClick={() => handleLanguageChange("EN")}
              sx={{
                backgroundColor:
                  language === "EN" ? "rgba(0, 0, 0, 0.1)" : "inherit",
              }}
            >
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{ fontSize: "1.5em" }}
              />
              EN
            </LanguageButton>
            <Button color="inherit">Login</Button>
            <IoNotificationsOutline />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Conditionally render the SubNavbar */}
      {isSubNavbarOpen && <SubNavbar />}
    </>
  );
}
