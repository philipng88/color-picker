import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SaveIcon from "@material-ui/icons/Save";
import ColorPickerDialogForm from "../ColorPickerForm/DialogForm/ColorPickerDialogForm";
import AlertDialog from "../../Dialogs/AlertDialog";
import NewPaletteFormNavbarStyles from "./NewPaletteFormNavbarStyles";

const NewPaletteFormNavbar = (props) => {
  const {
    palettes,
    colors,
    drawerIsOpen,
    handleDrawerOpen,
    handleSubmit,
    history,
  } = props;
  const [formDialogShowing, setFormDialogShowing] = useState(false);
  const [alertDialogIsOpen, setAlertDialogIsOpen] = useState(false);
  const classes = NewPaletteFormNavbarStyles();

  return (
    <>
      <AlertDialog
        open={alertDialogIsOpen}
        title="Go Back?"
        message="You are about to leave this page. The colors in your palette will not be saved. Are you sure you wish to continue?"
        accessibilityLabelText="leave-alert-dialog-title"
        accessibilityDescriptionText="leave-alert-dialog-content-text"
        confirmText="yes, go back"
        cancelText="no, stay on this page"
        confirmAction={() => history.push("/")}
        cancelAction={() => setAlertDialogIsOpen(false)}
      />
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
                className={clsx(
                  classes.menuButton,
                  drawerIsOpen && classes.hide
                )}
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
              onClick={() =>
                colors.length ? setAlertDialogIsOpen(true) : history.push("/")
              }
              variant="contained"
              color="secondary"
              startIcon={<ArrowBackIcon />}
            >
              go back
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              onClick={() => setFormDialogShowing(true)}
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
            hideFormDialog={() => setFormDialogShowing(false)}
          />
        )}
      </div>
    </>
  );
};

export default withRouter(NewPaletteFormNavbar);
