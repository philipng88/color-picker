import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/HomeRounded";
import IconButton from "@material-ui/core/IconButton";
import {
  NavbarWrapper,
  NavbarLogo,
  SliderContainer,
  SelectContainer,
} from "./NavbarStyles";
import "rc-slider/assets/index.css";

const Navbar = (props) => {
  const { level, setLevel, handleChange, showLevelSlider } = props;
  const [format, setFormat] = useState("hex");
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const closeSnackbar = () => setSnackbarVisible(false);

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
    setSnackbarVisible(true);
    handleChange(event.target.value);
  };

  return (
    <NavbarWrapper>
      <NavbarLogo>
        <Link to="/">
          <HomeIcon /> home
        </Link>
      </NavbarLogo>
      {showLevelSlider && (
        <div>
          <span>Level: {level}</span>
          <SliderContainer>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={setLevel}
            />
          </SliderContainer>
        </div>
      )}
      <SelectContainer>
        <Select variant="standard" onChange={handleFormatChange} value={format}>
          <MenuItem value="hex">Hex value</MenuItem>
          <MenuItem value="rgb">RGB value</MenuItem>
          <MenuItem value="rgba">RGBA value</MenuItem>
        </Select>
      </SelectContainer>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackbarVisible}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format changed to {format.toUpperCase()}</span>
        }
        ContentProps={{ "aria-describedby": "message-id" }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            color="inherit"
            key="close"
            aria-label="close"
            onClick={closeSnackbar}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </NavbarWrapper>
  );
};

export default Navbar;
