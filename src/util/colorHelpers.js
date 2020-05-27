import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const generatePalette = (starterPalette) => {
  const { paletteName, id, emoji, colors } = starterPalette;
  let newPalette = { paletteName, id, emoji, colors: {} };

  for (const level of levels) {
    newPalette.colors[level] = [];
  }

  for (const color of colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
};

const getRange = (hexColor) => [
  chroma(hexColor).darken(1.4).hex(),
  hexColor,
  "#fff",
];

const getScale = (hexColor, numberOfColors) =>
  chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);

export default generatePalette;
