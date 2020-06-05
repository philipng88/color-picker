import styled, { createGlobalStyle } from "styled-components";
import { TransitionGroup } from "react-transition-group";

export const TransitionStyles = createGlobalStyle`
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity ${({ transitionTime }) => transitionTime}ms ease-out
  }
`;

export const PaletteListWrapper = styled.div`
  background-color: blue;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: scroll;
`;

export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: white;
  align-items: baseline;
  button {
    background-color: #ff9d49;
    &:hover {
      background-color: #ff9d49;
    }
  }
  a {
    background-color: #58d666;
    &:hover {
      background-color: #58d666;
    }
  }
  button,
  a {
    color: white;
  }
`;

export const PalettesWrapper = styled(TransitionGroup)`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  gap: 5%;
  a {
    text-decoration: none;
  }
`;
