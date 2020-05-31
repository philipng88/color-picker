import React from "react";
import {
  MiniPaletteWrapper,
  ColorsWrapper,
  TitleWrapper,
  DeleteIcon,
} from "./MiniPaletteStyles";
import displayEmoji from "../../../util/displayEmoji";

const MiniPalette = (props) => {
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
    <MiniPaletteWrapper onClick={handleOpen}>
      <DeleteIcon
        style={{ transition: "all .3s ease-in-out" }}
        onClick={deletePalette}
      />
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
