import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SaveIcon from "@material-ui/icons/Save";
import { drawerWidth } from "../../../variables";
import ColorPickerDialogForm from "../ColorPickerForm/DialogForm/ColorPickerDialogForm";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navButtonsWrapper: {
    marginRight: "1rem",
  },
  navButton: {
    margin: "0 0.5rem",
  },
}));

const NewPaletteFormNavbar = (props) => {
  const {
    palettes,
    colors,
    drawerIsOpen,
    handleDrawerOpen,
    handleSubmit,
  } = props;
  const [formDialogShowing, setFormDialogShowing] = useState(false);
  const classes = styles();

  const showFormDialog = () => setFormDialogShowing(true);
  const hideFormDialog = () => setFormDialogShowing(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerIsOpen,
        })}
      >
        <Toolbar>
          <Tooltip title="Open Drawer">
            <IconButton
              color="inherit"
              aria-label="Open Drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, drawerIsOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navButtonsWrapper}>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="secondary"
            startIcon={<ArrowBackIcon />}
            className={classes.navButton}
          >
            go back
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={showFormDialog}
            className={classes.navButton}
            disabled={!colors.length}
          >
            save palette
          </Button>
        </div>
      </AppBar>
      {formDialogShowing && (
        <ColorPickerDialogForm
          palettes={palettes}
          handleSubmit={handleSubmit}
          hideFormDialog={hideFormDialog}
        />
      )}
    </div>
  );
};

export default NewPaletteFormNavbar;
