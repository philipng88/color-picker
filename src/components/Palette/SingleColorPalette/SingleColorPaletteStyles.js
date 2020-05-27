import styled from "styled-components";

export const SingleColorPaletteWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SingleColorBoxWrapper = styled.div`
  height: 90%;
`;

export const GoBackBoxWrapper = styled.div`
  width: 20%;
  height: 50%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: -4px;
  background-color: black;
  a {
    width: 100px;
    height: 30px;
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -15px;
    text-align: center;
    outline: none;
    background: rgba(255, 255, 255, 0.3);
    font-size: 1rem;
    line-height: 30px;
    text-transform: uppercase;
    border: none;
    text-decoration: none;
    color: white;
  }
`;
