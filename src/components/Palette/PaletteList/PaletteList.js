import React from "react";
import { Link } from "react-router-dom";
import {
  PaletteListWrapper,
  Container,
  Nav,
  PalettesWrapper,
  CreatePaletteBtn,
} from "./PaletteListStyles";
import MiniPalette from "../MiniPalette/MiniPalette";

const PaletteList = (props) => {
  const { palettes } = props;
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
              <Link to={`/palette/${id}`} key={id}>
                <MiniPalette
                  colors={colors}
                  emoji={emoji}
                  paletteName={paletteName}
                />
              </Link>
            );
          })}
        </PalettesWrapper>
      </Container>
    </PaletteListWrapper>
  );
};

export default PaletteList;