import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import BusinessIcon from "@material-ui/icons/Business";

import { useStyles } from "./HeaderStyles";

function Header() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <BusinessIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Companies X
          </Typography>
        </Toolbar>
      </AppBar>
      
    </>
  );
}

export default Header;
