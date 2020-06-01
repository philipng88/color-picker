import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  MiniPaletteWrapper,
  ColorsWrapper,
  TitleWrapper,
  DeleteIcon,
} from "./MiniPaletteStyles";
import displayEmoji from "../../../util/displayEmoji";
import seedColors from "../../../util/seedColors";

const MiniPalette = memo(
  (props) => {
    const {
      paletteName,
      emoji,
      colors,
      handleOpen,
      openDeleteDialog,
      id,
    } = props;

    const defaultPalettesNames = seedColors.map((item) => item.paletteName);

    const deletePalette = (event) => {
      event.stopPropagation();
      openDeleteDialog(id);
    };

    return (
      <MiniPaletteWrapper onClick={() => handleOpen(id)}>
        {!defaultPalettesNames.includes(paletteName) && (
          <DeleteIcon
            style={{ transition: "all .3s ease-in-out" }}
            onClick={deletePalette}
          />
        )}
        <ColorsWrapper>
          {colors.map(({ color, name }) => (
            <div style={{ backgroundColor: color }} key={name} />
          ))}
        </ColorsWrapper>
        <TitleWrapper>
          {paletteName}
          <span>{displayEmoji(emoji)}</span>
        </TitleWrapper>
      </MiniPaletteWrapper>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.openDeleteDialog !== nextProps.openDeleteDialog) return true;
    return false;
  }
);

MiniPalette.propTypes = {
  paletteName: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(
    PropTypes.shape({ color: PropTypes.string, name: PropTypes.string })
  ),
  handleOpen: PropTypes.func,
  openDeleteDialog: PropTypes.func,
  id: PropTypes.string,
};

export default MiniPalette;
