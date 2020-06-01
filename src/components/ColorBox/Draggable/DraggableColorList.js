import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import PropTypes from "prop-types";
import DraggableColorBox from "./DraggableColorBox";
import { AddColorsPrompt } from "./DraggableColorListStyles";

const DraggableColorList = (props) => {
  const { colors, deleteColor } = props;
  return (
    <div style={{ height: "100%" }}>
      {colors.length ? (
        colors.map(({ name, color }, index) => (
          <DraggableColorBox
            index={index}
            key={name}
            color={color}
            name={name}
            handleDelete={() => deleteColor(name)}
          />
        ))
      ) : (
        <AddColorsPrompt>
          <h1>start adding colors to your palette!</h1>
        </AddColorsPrompt>
      )}
    </div>
  );
};

DraggableColorList.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  deleteColor: PropTypes.func.isRequired,
};

export default SortableContainer(DraggableColorList);
