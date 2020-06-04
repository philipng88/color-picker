import chroma from "chroma-js";

const extractShades = (color) => {
  const getRange = (hexColor) => [
    chroma(hexColor).darken(1.4).hex(),
    hexColor,
    "#fff",
  ];

  const generateScale = (hexColor, numberOfColors) =>
    chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);

  return generateScale(color.hex, 10).reverse();
};

export default extractShades;
