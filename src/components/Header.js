import React, { useContext } from "react";

// Material-UI import
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { BuildContext } from "../contexts/BuildContext";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  export: {
    marginRight: 20,
  },
}));

const Header = ({ handleExport }) => {
  const classes = useStyles();
  const { build, toggleBuild } = useContext(BuildContext);

  return (
    <div>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography align="left" variant="h5" className={classes.title}>
            Create Your Personal CV
          </Typography>
          {!build ? (
            <Button
              variant="outlined"
              className={classes.export}
              color="primary"
              onClick={handleExport}
            >
              Download PDF
            </Button>
          ) : null}
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
