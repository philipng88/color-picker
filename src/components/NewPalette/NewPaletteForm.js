import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CloseIcon from "@material-ui/icons/Close";
import arrayMove from "array-move";
import DraggableColorList from "../ColorBox/Draggable/DraggableColorList";
import ConfirmationDialog from "../ConfirmationDialog";
import NewPaletteFormNavbar from "./NewPaletteFormNavbar/NewPaletteFormNavbar";
import ColorPickerForm from "./ColorPickerForm/ColorPickerForm";
import { drawerWidth } from "../../variables";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    width: "100%",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

const NewPaletteForm = (props) => {
  const classes = styles();
  const { savePalette, history, palettes } = props;
  const [drawerIsOpen, setDrawerIsOpen] = useState(true);
  const [colors, setColors] = useState([]);
  const [clearPaletteDialogIsOpen, setClearPaletteDialogIsOpen] = useState(
    false
  );

  const deleteColor = (colorToRemove) =>
    setColors(colors.filter(({ name }) => name !== colorToRemove));

  const clearColors = () => {
    setColors([]);
    setClearPaletteDialogIsOpen(false);
  };

  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = colors;
    savePalette(newPalette);
    history.push("/");
  };

  return (
    <>
      <ConfirmationDialog
        open={clearPaletteDialogIsOpen}
        title="Clear Palette?"
        message="You are about to remove all colors from your palette. Are you sure you wish to proceed?"
        confirmText="Yes, Clear Palette"
        cancelText="No, Keep Palette"
        confirmAction={clearColors}
        cancelAction={() => setClearPaletteDialogIsOpen(false)}
      />
      <div className={classes.root}>
        <NewPaletteFormNavbar
          palettes={palettes}
          colors={colors}
          drawerIsOpen={drawerIsOpen}
          handleDrawerOpen={() => setDrawerIsOpen(true)}
          handleSubmit={handleSubmit}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={drawerIsOpen}
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.drawerHeader}>
            <Tooltip title="Close Drawer">
              <IconButton onClick={() => setDrawerIsOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              disabled={!colors.length}
              onClick={() => setClearPaletteDialogIsOpen(true)}
            >
              clear palette
            </Button>
            <ColorPickerForm colors={colors} setColors={setColors} />
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: drawerIsOpen,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            deleteColor={deleteColor}
            axis="xy"
            onSortEnd={({ oldIndex, newIndex }) =>
              setColors(arrayMove(colors, oldIndex, newIndex))
            }
          />
        </main>
      </div>
    </>
  );
};

export default withRouter(NewPaletteForm);
