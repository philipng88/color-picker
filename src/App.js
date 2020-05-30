import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./components/Palette/PaletteList/PaletteList";
import Palette from "./components/Palette/Palette";
import SingleColorPalette from "./components/Palette/SingleColorPalette/SingleColorPalette";
import NewPaletteForm from "./components/NewPalette/NewPaletteForm";
import seedColors from "./util/seedColors";
import generatePalette from "./util/colorHelpers";

const App = () => {
  const [palettes, setPalettes] = useState(
    JSON.parse(localStorage.getItem("palettes")) || seedColors
  );
  const findPalette = (id) => palettes.find((palette) => palette.id === id);
  const deletePalette = (id) =>
    setPalettes((prev) => prev.filter((palette) => palette.id !== id));
  const savePalette = (newPalette) => setPalettes([...palettes, newPalette]);

  useEffect(() => localStorage.setItem("palettes", JSON.stringify(palettes)), [
    palettes,
  ]);

  return (
    <Switch>
      <Route exact path="/palette/new">
        <NewPaletteForm savePalette={savePalette} palettes={palettes} />
      </Route>
      <Route exact path="/">
        <PaletteList palettes={palettes} deletePalette={deletePalette} />
      </Route>
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  );
};

export default App;
