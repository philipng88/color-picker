import React, { memo } from "react";
import {
  MiniPaletteWrapper,
  ColorsWrapper,
  TitleWrapper,
  DeleteIcon,
} from "./MiniPaletteStyles";
import displayEmoji from "../../../util/displayEmoji";

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

    const deletePalette = (event) => {
      event.stopPropagation();
      openDeleteDialog(id);
    };

    return (
      <MiniPaletteWrapper onClick={() => handleOpen(id)}>
        <DeleteIcon
          style={{ transition: "all .3s ease-in-out" }}
          onClick={deletePalette}
        />
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

export default MiniPalette;
