import styled, { css } from "styled-components";
import chroma from "chroma-js";

const adjustedColor = css`
  color: ${({ color }) =>
    chroma.contrast(color, "white") < 4.5 ? "rgba(0, 0, 0, 0.5)" : "white"};
`;

export const DraggableColorBoxWrapper = styled.div`
  background-color: ${({ color }) => color};
  width: 20%;
  height: 25%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: move;
  cursor: grab;
  margin-bottom: -5.5px;
  &:hover svg {
    ${adjustedColor}
    transform: scale(1.5);
  }
`;

export const BoxContent = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  span {
    display: flex;
    align-items: center;
    ${adjustedColor}
  }
  svg {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;
