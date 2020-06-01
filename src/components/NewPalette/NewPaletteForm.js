import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CloseIcon from "@material-ui/icons/Close";
import arrayMove from "array-move";
import DraggableColorList from "../ColorBox/Draggable/DraggableColorList";
import AlertDialog from "../Dialogs/AlertDialog";
import NewPaletteFormNavbar from "./NewPaletteFormNavbar/NewPaletteFormNavbar";
import ColorPickerForm from "./ColorPickerForm/ColorPickerForm";
import NewPaletteFormStyles from "./NewPaletteFormStyles";
import { maxColors } from "../../variables";

const NewPaletteForm = (props) => {
  const classes = NewPaletteFormStyles();
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

  const addRandomColor = () => {
    const allColors = palettes.map((palette) => palette.colors).flat();
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      randomColor = allColors[Math.floor(Math.random() * allColors.length)];
      isDuplicateColor = colors.some(
        // eslint-disable-next-line no-loop-func
        (color) => color.name === randomColor.name
      );
    }
    setColors([...colors, randomColor]);
  };

  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = colors;
    savePalette(newPalette);
    history.push("/");
  };

  return (
    <>
      <AlertDialog
        open={clearPaletteDialogIsOpen}
        title="Clear Palette?"
        message="You are about to remove all colors from your palette. Are you sure you wish to proceed?"
        accessibilityLabelText="clear-alert-dialog-title"
        accessibilityDescriptionText="clear-alert-dialog-content-text"
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
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                disabled={!colors.length}
                onClick={() => setClearPaletteDialogIsOpen(true)}
              >
                clear palette
              </Button>
              <Button
                variant="contained"
                color="primary"
                disabled={colors.length >= maxColors}
                onClick={addRandomColor}
              >
                random color
              </Button>
            </div>
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

NewPaletteForm.propTypes = {
  palettes: PropTypes.arrayOf(
    PropTypes.shape({
      colors: PropTypes.arrayOf(
        PropTypes.shape({
          color: PropTypes.string,
          name: PropTypes.string,
        })
      ),
      emoji: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  savePalette: PropTypes.func.isRequired,
};

export default withRouter(NewPaletteForm);
