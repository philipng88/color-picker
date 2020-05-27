import React from "react";
import {
  MiniPaletteWrapper,
  ColorsWrapper,
  TitleWrapper,
} from "./MiniPaletteStyles";
import displayEmoji from "../../../util/displayEmoji";

const MiniPalette = (props) => {
  const { paletteName, emoji, colors } = props;
  return (
    <MiniPaletteWrapper>
      <ColorsWrapper>
        {colors.map((color) => (
          <div style={{ backgroundColor: color.color }} key={color.name} />
        ))}
      </ColorsWrapper>
      <TitleWrapper>
        {paletteName}
        <span>{displayEmoji(emoji)}</span>
      </TitleWrapper>
    </MiniPaletteWrapper>
  );
};

export default MiniPalette;
