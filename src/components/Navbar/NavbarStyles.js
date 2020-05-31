import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 6vh;
`;

export const NavbarLogo = styled.div`
  margin-right: 15px;
  padding: 0 13px;
  font-size: 22px;
  background-color: #eceff1;
  height: 100%;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    text-transform: capitalize;
    color: black;
    svg {
      vertical-align: top;
    }
  }
`;

export const SliderContainer = styled.div`
  width: 340px;
`;

export const SelectContainer = styled.div`
  margin-left: auto;
  margin-right: 1rem;
`;
