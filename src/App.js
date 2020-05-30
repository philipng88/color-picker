import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./components/Palette/PaletteList/PaletteList";
import Palette from "./components/Palette/Palette";
import SingleColorPalette from "./components/Palette/SingleColorPalette/SingleColorPalette";
import NewPaletteForm from "./components/NewPalette/NewPaletteForm";
import seedColors from "./util/seedColors";
import generatePalette from "./util/colorHelpers";

const App = () => {
  const [palettes, setPalettes] = useState(seedColors);
  const findPalette = (id) => palettes.find((palette) => palette.id === id);
  const savePalette = (newPalette) => setPalettes([...palettes, newPalette]);

  return (
    <Switch>
      <Route exact path="/palette/new">
        <NewPaletteForm savePalette={savePalette} palettes={palettes} />
      </Route>
      <Route exact path="/">
        <PaletteList palettes={palettes} />
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
