const extractShades = (palette, colorToFilterBy) => {
  let shadesArray = [];
  const allColors = palette.colors;
  for (const key in allColors) {
    shadesArray = shadesArray.concat(
      allColors[key].filter((color) => color.id === colorToFilterBy)
    );
  }
  return shadesArray.slice(1);
};

export default extractShades;
