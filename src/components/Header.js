import React, { useContext } from "react";

// Material-UI import
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { BuildContext } from "../contexts/BuildContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const { toggleBuild } = useContext(BuildContext);

  return (
    <div>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography align="center" variant="h5" className={classes.title}>
            Create Your Personal CV
          </Typography>
          <FormControlLabel
            className={classes.switch}
            onChange={toggleBuild}
            control={<Switch color="primary" />}
            label="Preview"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
