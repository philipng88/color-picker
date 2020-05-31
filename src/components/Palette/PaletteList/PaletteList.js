import React from "react";
import { Link, withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Button from "@material-ui/core/Button";
import {
  PaletteListWrapper,
  Container,
  Nav,
  PalettesWrapper,
  TransitionStyles,
} from "./PaletteListStyles";
import MiniPalette from "../MiniPalette/MiniPalette";

const PaletteList = (props) => {
  const { palettes, history, deletePalette } = props;
  const transitionTime = 500;
  return (
    <>
      <TransitionStyles transitionTime={transitionTime} />
      <PaletteListWrapper>
        <Container>
          <Nav>
            <h1>Color Picker</h1>
            <Button
              variant="contained"
              style={{ backgroundColor: "#ff9d49" }}
              onClick={() => {
                localStorage.removeItem("palettes");
                window.location.reload();
              }}
            >
              reset palettes
            </Button>
            <Button
              component={Link}
              variant="contained"
              to="/palette/new"
              style={{ backgroundColor: "#58d666" }}
            >
              create palette
            </Button>
          </Nav>
          <PalettesWrapper>
            {palettes.map((palette) => {
              const { colors, emoji, paletteName, id } = palette;
              return (
                <CSSTransition
                  key={id}
                  classNames="fade"
                  timeout={transitionTime}
                >
                  <MiniPalette
                    colors={colors}
                    emoji={emoji}
                    paletteName={paletteName}
                    id={id}
                    handleDelete={deletePalette}
                    handleOpen={() => history.push(`/palette/${id}`)}
                  />
                </CSSTransition>
              );
            })}
          </PalettesWrapper>
        </Container>
      </PaletteListWrapper>
    </>
  );
};

export default withRouter(PaletteList);
