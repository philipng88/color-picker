import React, { useState } from "react";
import PropTypes from "prop-types";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "./Footer/PaletteFooter";
import { PaletteWrapper, ColorBoxWrapper } from "./PaletteStyles";

const Palette = (props) => {
  const [format, setFormat] = useState("hex");
  const {
    palette: { colors, emoji, paletteName, id: paletteId },
  } = props;

  return (
    <PaletteWrapper>
      <Navbar
        handleChange={(value) => setFormat(value)}
        heading={paletteName}
      />
      <ColorBoxWrapper>
        {colors.map((color) => {
          const { name, id: colorId } = color;
          return (
            <ColorBox
              background={color[format]}
              name={name}
              key={colorId}
              colorId={colorId}
              paletteId={paletteId}
              showingFullPalette
            />
          );
        })}
      </ColorBoxWrapper>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </PaletteWrapper>
  );
};

Palette.propTypes = {
  palette: PropTypes.shape({
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        hex: PropTypes.string,
        hsl: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        rgb: PropTypes.string,
      })
    ),
    emoji: PropTypes.string,
    id: PropTypes.string,
    paletteName: PropTypes.string,
  }),
};

export default Palette;
