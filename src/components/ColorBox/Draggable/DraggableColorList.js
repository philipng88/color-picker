import React from "react";
import { SortableContainer } from "react-sortable-hoc";
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

export default SortableContainer(DraggableColorList);
