import React from "react";
import PropTypes from "prop-types";
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

PaletteFooter.propTypes = {
  paletteName: PropTypes.string,
  emoji: PropTypes.string,
};

export default PaletteFooter;
