import React from "react";

// Material-UI import
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography align="center" variant="h5" className={classes.title}>
            Create Your Personal CV
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
