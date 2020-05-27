import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorBox from "../../ColorBox/ColorBox";
import Navbar from "../../Navbar/Navbar";
import PaletteFooter from "../Footer/PaletteFooter";
import extractShades from "../../../util/extractShades";
import {
  SingleColorPaletteWrapper,
  SingleColorBoxWrapper,
  GoBackBoxWrapper,
} from "./SingleColorPaletteStyles";

const SingleColorPalette = (props) => {
  const { palette, colorId } = props;
  const { paletteName, emoji, id } = palette;
  const [format, setFormat] = useState("hex");
  const shades = extractShades(palette, colorId);

  return (
    <SingleColorPaletteWrapper>
      <Navbar
        handleChange={(value) => setFormat(value)}
        showLevelSlider={false}
      />
      <SingleColorBoxWrapper>
        {shades.map((color) => {
          const { name } = color;
          return (
            <ColorBox
              key={name}
              name={name}
              background={color[format]}
              showingFullPalette={false}
            />
          );
        })}
        <GoBackBoxWrapper>
          <Link to={`/palette/${id}`}>Go Back</Link>
        </GoBackBoxWrapper>
      </SingleColorBoxWrapper>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </SingleColorPaletteWrapper>
  );
};

export default SingleColorPalette;
