import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/HomeRounded";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { NavbarWrapper, NavbarLogo } from "./NavbarStyles";

const Navbar = (props) => {
  const { handleChange, heading } = props;
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
      <Typography variant="h5">{heading}</Typography>
      <Select
        variant="standard"
        onChange={handleFormatChange}
        value={format}
        style={{ marginRight: "1rem" }}
      >
        <MenuItem value="hex">Hex value</MenuItem>
        <MenuItem value="rgb">RGB value</MenuItem>
        <MenuItem value="hsl">HSL value</MenuItem>
      </Select>
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

Navbar.propTypes = {
  handleChange: PropTypes.func,
  paletteName: PropTypes.string,
  colorName: PropTypes.string,
};

export default Navbar;
