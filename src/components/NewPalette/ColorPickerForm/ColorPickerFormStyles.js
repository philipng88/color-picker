import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { TextValidator } from "react-material-ui-form-validator";
import styled from "styled-components";

export const StyledChromePicker = styled(ChromePicker)`
  margin-top: 2rem;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  font-size: 2rem;
`;

export const ColorNameInput = styled(TextValidator)`
  width: 100%;
  height: 70px;
`;
