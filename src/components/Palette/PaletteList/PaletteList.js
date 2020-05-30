import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  PaletteListWrapper,
  Container,
  Nav,
  PalettesWrapper,
  CreatePaletteBtn,
} from "./PaletteListStyles";
import MiniPalette from "../MiniPalette/MiniPalette";

const PaletteList = (props) => {
  const { palettes, history, deletePalette } = props;
  return (
    <PaletteListWrapper>
      <Container>
        <Nav>
          <h1>Color Picker</h1>
          <CreatePaletteBtn component={Link} to="/palette/new">
            create palette
          </CreatePaletteBtn>
        </Nav>
        <PalettesWrapper>
          {palettes.map((palette) => {
            const { colors, emoji, paletteName, id } = palette;
            return (
              <MiniPalette
                colors={colors}
                emoji={emoji}
                paletteName={paletteName}
                key={id}
                id={id}
                handleDelete={deletePalette}
                handleOpen={() => history.push(`/palette/${id}`)}
              />
            );
          })}
        </PalettesWrapper>
      </Container>
    </PaletteListWrapper>
  );
};

export default withRouter(PaletteList);
