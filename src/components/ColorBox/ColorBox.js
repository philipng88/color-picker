import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import ColorBoxStyles from "./ColorBoxStyles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }

  render() {
    const {
      background,
      name,
      colorId,
      paletteId,
      showingFullPalette,
      classes,
    } = this.props;

    const {
      colorBox,
      copyOverlay,
      showOverlay,
      copyMsg,
      showMessage,
      colorName,
      boxContent,
      copyButton,
      seeMore,
    } = classes;

    const { copied } = this.state;

    return (
      <CopyToClipboard
        text={background}
        onCopy={() =>
          this.setState({ copied: true }, () =>
            setTimeout(() => this.setState({ copied: false }), 1750)
          )
        }
      >
        <div className={colorBox}>
          <div className={clsx(copyOverlay, copied && showOverlay)} />
          <div className={clsx(copyMsg, copied && showMessage)}>
            <h1>copied!</h1>
            <p className={colorName}>{background}</p>
          </div>
          <div className="copy-container">
            <div className={boxContent}>
              <span className={colorName}>{name}</span>
            </div>
            <button className={copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

ColorBox.propTypes = {
  background: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  colorId: PropTypes.string,
  paletteId: PropTypes.string,
  showingFullPalette: PropTypes.bool,
  classes: PropTypes.object,
};

export default withStyles(ColorBoxStyles)(ColorBox);
