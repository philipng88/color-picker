import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import styled from "styled-components";
import DraggableColorBox from "./DraggableColorBox";

const AddColorsPrompt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
  text-transform: capitalize;
`;

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
