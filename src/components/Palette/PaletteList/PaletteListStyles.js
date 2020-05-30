import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

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
`;

export const PalettesWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  gap: 5%;
  a {
    text-decoration: none;
  }
`;

export const CreatePaletteBtn = withStyles(() => ({
  root: {
    height: "38px",
    padding: "0 30px",
    color: "#fff",
    textAlign: "center",
    fontSize: "11px",
    fontWeight: "700",
    lineHeight: "38px",
    letterSpacing: "0.1rem",
    textTransform: "uppercase",
    textDecoration: "none",
    whiteSpace: "nowrap",
    backgroundColor: "#9b4dca",
    borderRadius: "4px",
    border: "1px solid #9b4dca",
    cursor: "pointer",
    boxSizing: "border-box",
    "&:hover, &:focus": {
      borderColor: "#606c76",
      backgroundColor: "#606c76",
      outline: "0",
    },
  },
}))(Button);
