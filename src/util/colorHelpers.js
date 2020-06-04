import chroma from "chroma-js";
import slugify from "slugify";

const generatePalette = (starterPalette) => {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: [],
  };

  for (const color of starterPalette.colors) {
    newPalette.colors.push({
      name: color.name,
      id: slugify(color.name, { lower: true }),
      hex: color.color,
      rgb: chroma(color.color).css(),
      hsl: chroma(color.color).css("hsl"),
    });
  }
  return newPalette;
};

export default generatePalette;
