import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import chroma from "chroma-js";
import Button from "@material-ui/core/Button";
import { ValidatorForm } from "react-material-ui-form-validator";
import { StyledChromePicker, ColorNameInput } from "./ColorPickerFormStyles";

const ColorPickerForm = (props) => {
  const { colors, setColors, paletteIsFull } = props;
  const [newColorName, setNewColorName] = useState("");
  const [currentColor, setCurrentColor] = useState("#33C3F0");

  const addNewColor = () => {
    const newColor = { color: currentColor, name: newColorName };
    setColors([...colors, newColor]);
    setNewColorName("");
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("colorNameIsUnique", (value) => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("colorIsUnique", () => {
      return colors.every(({ color }) => color !== currentColor);
    });
  }, [colors, currentColor]);

  return (
    <>
      <StyledChromePicker
        color={currentColor}
        width="100%"
        onChangeComplete={(newColor) => setCurrentColor(newColor.hex)}
        disableAlpha
      />
      <ValidatorForm onSubmit={addNewColor} instantValidate={false}>
        <ColorNameInput
          value={newColorName}
          onChange={(event) => setNewColorName(event.target.value)}
          validators={["required", "colorNameIsUnique", "colorIsUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name is already in use",
            "Color is already in your palette",
          ]}
          variant="filled"
          label="Color Name"
          margin="normal"
          disabled={paletteIsFull}
        />
        <Button
          variant="contained"
          type="submit"
          style={{
            backgroundColor: !paletteIsFull
              ? currentColor
              : "rgba(0, 0, 0, 0.12)",
            color: (() => {
              if (!paletteIsFull)
                return chroma.contrast(currentColor, "white") < 4.5
                  ? "black"
                  : "white";
              return "rgba(0, 0, 0, 0.26)";
            })(),
            width: "100%",
            padding: "1rem",
            marginTop: "1rem",
            fontSize: "2rem",
          }}
          disabled={paletteIsFull}
        >
          {paletteIsFull ? "palette full" : "add color"}
        </Button>
      </ValidatorForm>
    </>
  );
};

ColorPickerForm.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({ color: PropTypes.string, name: PropTypes.string })
  ),
  setColors: PropTypes.func.isRequired,
  paletteIsFull: PropTypes.bool.isRequired,
};

export default ColorPickerForm;
