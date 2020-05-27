import React from "react";
import { PaletteFooterWrapper } from "./PaletteFooterStyles";
import displayEmoji from "../../../util/displayEmoji";

const PaletteFooter = (props) => {
  const { paletteName, emoji } = props;
  return (
    <PaletteFooterWrapper>
      {paletteName}
      <span>{displayEmoji(emoji)}</span>
    </PaletteFooterWrapper>
  );
};

export default PaletteFooter;
