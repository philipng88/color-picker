import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import chroma from "chroma-js";
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
  const color = palette.colors.find((item) => item.id === colorId);
  const shades = extractShades(color);

  return (
    <SingleColorPaletteWrapper>
      <Navbar
        handleChange={(value) => setFormat(value)}
        heading={color.name.toUpperCase()}
      />
      <SingleColorBoxWrapper>
        {shades.slice(1).map((shade, index) => (
          <ColorBox
            key={index}
            name={`Shade ${index + 1}`}
            background={(() => {
              switch (format) {
                case "hex":
                  return shade;
                case "rgb":
                  return chroma(shade).css();
                case "hsl":
                  return chroma(shade).css("hsl");
                default:
                  return shade;
              }
            })()}
            showingFullPalette={false}
          />
        ))}
        <GoBackBoxWrapper>
          <Link to={`/palette/${id}`}>Go Back</Link>
        </GoBackBoxWrapper>
      </SingleColorBoxWrapper>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </SingleColorPaletteWrapper>
  );
};

SingleColorPalette.propTypes = {
  colorId: PropTypes.string,
  paletteName: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.string,
};

export default SingleColorPalette;
