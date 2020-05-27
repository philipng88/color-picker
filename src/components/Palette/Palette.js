import React, { useState } from "react";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "./Footer/PaletteFooter";
import { PaletteWrapper, ColorBoxWrapper } from "./PaletteStyles";

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const {
    palette: { colors, emoji, paletteName, id: paletteId },
  } = props;

  return (
    <PaletteWrapper>
      <Navbar
        level={level}
        setLevel={setLevel}
        handleChange={(value) => setFormat(value)}
        showLevelSlider
      />
      <ColorBoxWrapper>
        {colors[level].map((color) => {
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

export default Palette;
