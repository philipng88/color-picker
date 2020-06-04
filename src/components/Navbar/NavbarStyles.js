import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
