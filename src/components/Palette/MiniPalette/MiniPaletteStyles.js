import styled from "styled-components";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

export const DeleteIcon = styled(DeleteRoundedIcon)`
  color: white;
  background-color: #eb3d30;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  z-index: 10;
  opacity: 0;
`;

export const MiniPaletteWrapper = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover ${DeleteIcon} {
    opacity: 1;
  }
`;

export const ColorsWrapper = styled.div`
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    #ccc 10px,
    #ccc 20px
  );
  height: 150px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border-radius: 5px;
  overflow: hidden;
`;

export const TitleWrapper = styled.h5`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: black;
  padding-top: 0.5rem;
  font-size: 1rem;
  position: relative;
`;
