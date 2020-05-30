import React, { useState, useEffect } from "react";
import chroma from "chroma-js";
import { ValidatorForm } from "react-material-ui-form-validator";
import { maxColors } from "../../../variables";
import {
  StyledChromePicker,
  ColorNameInput,
  SubmitButton,
} from "./ColorPickerFormStyles";

const ColorPickerForm = (props) => {
  const { colors, setColors } = props;
  const [newColorName, setNewColorName] = useState("");
  const [currentColor, setCurrentColor] = useState("#33C3F0");
  const paletteIsFull = colors.length >= maxColors;

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
    ValidatorForm.addValidationRule("colorIsUnique", (value) => {
      return colors.every(({ color }) => color !== currentColor);
    });
  }, [colors, currentColor]);

  return (
    <>
      <StyledChromePicker
        color={currentColor}
        width="100%"
        onChangeComplete={(newColor) => setCurrentColor(newColor.hex)}
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
        />
        <SubmitButton
          variant="contained"
          type="submit"
          style={{
            backgroundColor: !paletteIsFull
              ? currentColor
              : "rgba(0, 0, 0, 0.12)",
            color: !paletteIsFull
              ? chroma.contrast(currentColor, "white") < 4.5
                ? "black"
                : "white"
              : "rgba(0, 0, 0, 0.26)",
          }}
          disabled={paletteIsFull}
        >
          {paletteIsFull ? "palette full" : "add color"}
        </SubmitButton>
      </ValidatorForm>
    </>
  );
};

export default ColorPickerForm;
