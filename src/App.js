import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slugify from "slugify";
import PaletteList from "./components/Palette/PaletteList/PaletteList";
import Palette from "./components/Palette/Palette";
import SingleColorPalette from "./components/Palette/SingleColorPalette/SingleColorPalette";
import NewPaletteForm from "./components/NewPalette/NewPaletteForm";
import seedColors from "./util/seedColors";
import generatePalette from "./util/colorHelpers";
import { transitionTime } from "./variables";
import Page from "./components/Helpers/Page";
import ErrorPage from "./components/Error/ErrorPage";

const App = () => {
  const [palettes, setPalettes] = useState(
    JSON.parse(localStorage.getItem("palettes")) || seedColors
  );
  const deletePalette = (id) =>
    setPalettes((prev) => prev.filter((palette) => palette.id !== id));
  const savePalette = (newPalette) => setPalettes([newPalette, ...palettes]);

  const PaletteIds = palettes.map((palette) => palette.id);

  useEffect(() => localStorage.setItem("palettes", JSON.stringify(palettes)), [
    palettes,
  ]);

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="page"
            timeout={transitionTime}
          >
            <Switch location={location}>
              <Route exact path="/palette/new">
                <Page>
                  <NewPaletteForm
                    savePalette={savePalette}
                    palettes={palettes}
                  />
                </Page>
              </Route>
              <Route exact path="/">
                <Page>
                  <PaletteList
                    palettes={palettes}
                    deletePalette={deletePalette}
                  />
                </Page>
              </Route>
              <Route
                exact
                path="/palette/:id"
                render={(routeProps) => {
                  const { id } = routeProps.match.params;
                  const foundPalette = palettes.find(
                    (palette) => palette.id === id
                  );
                  return (
                    <Page>
                      {foundPalette ? (
                        <Palette palette={generatePalette(foundPalette)} />
                      ) : (
                        <ErrorPage />
                      )}
                    </Page>
                  );
                }}
              />
              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={(routeProps) => {
                  const { colorId, paletteId } = routeProps.match.params;

                  const paletteExists = PaletteIds.some(
                    (item) => item === paletteId
                  );

                  const foundPalette = palettes.find(
                    (palette) => palette.id === paletteId
                  );

                  const colorExists = paletteExists
                    ? foundPalette.colors.some(
                        (color) =>
                          slugify(color.name, { lower: true }) === colorId
                      )
                    : false;

                  return (
                    <Page>
                      {paletteExists && colorExists ? (
                        <SingleColorPalette
                          colorId={colorId}
                          palette={generatePalette(foundPalette)}
                        />
                      ) : (
                        <ErrorPage />
                      )}
                    </Page>
                  );
                }}
              />
              <Route>
                <ErrorPage />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default App;
