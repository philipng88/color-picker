import React from "react";
import {
  MiniPaletteWrapper,
  ColorsWrapper,
  TitleWrapper,
  DeleteIcon,
} from "./MiniPaletteStyles";
import displayEmoji from "../../../util/displayEmoji";

const MiniPalette = (props) => {
  const { paletteName, emoji, colors, handleOpen, handleDelete, id } = props;

  return (
    <MiniPaletteWrapper onClick={handleOpen}>
      <DeleteIcon
        style={{ transition: "all .3s ease-in-out" }}
        onClick={(event) => {
          event.stopPropagation();
          if (window.confirm("Are you sure you want to delete this palette?"))
            handleDelete(id);
        }}
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
