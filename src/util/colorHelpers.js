import chroma from "chroma-js";
import slugify from "slugify";

const generatePalette = (starterPalette) => {
  const newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: [],
  };

  // eslint-disable-next-line no-restricted-syntax
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
