import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import PersonIcon from "@mui/icons-material/Person";
import { BrowserRouter as Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon></HighlightIcon> Keeper App
        <PersonIcon
          aria-label="Login"
          className="loginIcon"
          fontSize="large"
        ></PersonIcon>
      </h1>
    </header>
  );
}

export default Header;
