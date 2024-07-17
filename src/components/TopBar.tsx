import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

const TopBar = () => {
  const router = useRouter();
  return (
    <AppBar position="static">
      <Toolbar sx={{ bgcolor: "#26355D" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Foodie-POS
        </Typography>

        <Button color="inherit">LOGOUT</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
