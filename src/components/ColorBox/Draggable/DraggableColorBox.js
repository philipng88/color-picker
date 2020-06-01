import React from "react";
import { SortableElement } from "react-sortable-hoc";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import {
  DraggableColorBoxWrapper,
  BoxContent,
} from "./DraggableColorBoxStyles";

const DraggableColorBox = (props) => {
  const { color, name, handleDelete } = props;
  return (
    <DraggableColorBoxWrapper color={color}>
      <BoxContent color={color}>
        <span>{name}</span>
        <Tooltip title="Delete" placement="left" arrow>
          <DeleteIcon onClick={handleDelete} />
        </Tooltip>
      </BoxContent>
    </DraggableColorBoxWrapper>
  );
};

DraggableColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default SortableElement(DraggableColorBox);
