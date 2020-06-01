import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const ColorPickerDialogForm = (props) => {
  const { palettes, handleSubmit, hideFormDialog } = props;
  const [stage, setStage] = useState("form");
  const [newPaletteName, setNewPaletteName] = useState("");

  const savePalette = (emoji) => {
    const newPalette = { paletteName: newPaletteName, emoji: emoji.native };
    handleSubmit(newPalette);
    setStage("");
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("paletteNameIsUnique", (value) => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("noWhiteSpaceBeginOrEnd", (value) => {
      return value.match(/^[^\s]+(\s+[^\s]+)*$/);
    });
    ValidatorForm.addValidationRule("restrictedName", (value) => {
      const restrictedNames = ["new"];
      return !restrictedNames.includes(value.toLowerCase());
    });
  }, [palettes]);

  return (
    <>
      <Dialog open={stage === "emoji"} aria-labelledby="choose-emoji-title">
        <DialogTitle id="choose-emoji-title">
          2<span>&#41;</span> Choose An Emoji
        </DialogTitle>
        <Picker onSelect={savePalette} />
        <DialogActions>
          <Button
            onClick={() => setStage("form")}
            color="secondary"
            type="button"
          >
            go back
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={stage === "form"}
        onClose={hideFormDialog}
        aria-labelledby="choose-palette-name-title"
      >
        <DialogTitle
          id="choose-palette-name-title"
          style={{ paddingBottom: 0 }}
        >
          1<span>&#41;</span> Choose A Palette Name
        </DialogTitle>
        <ValidatorForm onSubmit={() => setStage("emoji")} debounceTime={1500}>
          <DialogContent style={{ paddingTop: 0 }}>
            <TextValidator
              placeholder="My New Palette"
              value={newPaletteName}
              spellCheck="false"
              fullWidth
              margin="normal"
              onChange={(event) => setNewPaletteName(event.target.value)}
              validators={[
                "required",
                "paletteNameIsUnique",
                "noWhiteSpaceBeginOrEnd",
                "restrictedName",
              ]}
              errorMessages={[
                "Enter a palette name",
                "Palette name is already in use",
                "No empty space before or after name",
                "Please choose another name",
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={hideFormDialog} color="secondary" type="button">
              cancel
            </Button>
            <Button color="primary" type="submit">
              continue
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </>
  );
};

ColorPickerDialogForm.propTypes = {
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
  handleSubmit: PropTypes.func.isRequired,
  hideFormDialog: PropTypes.func.isRequired,
};

export default ColorPickerDialogForm;
