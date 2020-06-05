import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import {
  PaletteListWrapper,
  Container,
  Nav,
  PalettesWrapper,
  TransitionStyles,
} from "./PaletteListStyles";
import MiniPalette from "../MiniPalette/MiniPalette";
import SimpleDialog from "../../Dialogs/SimpleDialog";
import AlertDialog from "../../Dialogs/AlertDialog";
import { transitionTime } from "../../../variables";
import asyncLocalStorage from "../../../util/asyncLocalStorage";
import defaultPalettes from "../../../util/seedColors";

const PaletteList = (props) => {
  const { palettes, history, deletePalette } = props;
  const [deletePaletteDialogIsOpen, setDeletePaletteDialogIsOpen] = useState(
    false
  );
  const [resetPalettesDialogIsOpen, setResetPalettesDialogIsOpen] = useState(
    false
  );
  const [deletionId, setDeletionId] = useState("");

  const openResetDialog = () => setResetPalettesDialogIsOpen(true);
  const closeResetDialog = () => setResetPalettesDialogIsOpen(false);

  const openDeleteDialog = (id) => {
    setDeletePaletteDialogIsOpen(true);
    setDeletionId(id);
  };

  const closeDeleteDialog = () => {
    setDeletePaletteDialogIsOpen(false);
    setDeletionId("");
  };

  const goToPalette = (id) => history.push(`/palette/${id}`);

  return (
    <>
      <TransitionStyles transitionTime={transitionTime} />
      <PaletteListWrapper>
        <Container>
          <Nav>
            <h1>Color Picker</h1>
            <Button
              variant="contained"
              onClick={openResetDialog}
              style={{
                display:
                  defaultPalettes.length === palettes.length
                    ? "none"
                    : "inline-flex",
              }}
            >
              reset palettes
            </Button>
            <Button component={Link} variant="contained" to="/palette/new">
              create palette
            </Button>
          </Nav>
          <PalettesWrapper>
            {palettes.map((palette) => {
              const { colors, emoji, paletteName, id } = palette;
              return (
                <CSSTransition
                  key={id}
                  classNames="fade"
                  timeout={transitionTime}
                >
                  <MiniPalette
                    colors={colors}
                    emoji={emoji}
                    paletteName={paletteName}
                    id={id}
                    openDeleteDialog={openDeleteDialog}
                    handleOpen={goToPalette}
                  />
                </CSSTransition>
              );
            })}
          </PalettesWrapper>
        </Container>
      </PaletteListWrapper>
      <SimpleDialog
        open={deletePaletteDialogIsOpen}
        accessibilityLabelText="delete-palette-dialog-title"
        title="Delete Palette?"
        confirmText="Yes"
        cancelText="No"
        closeDialog={closeDeleteDialog}
        confirmAction={() => deletePalette(deletionId)}
        cancelAction={closeDeleteDialog}
      />
      <AlertDialog
        open={resetPalettesDialogIsOpen}
        title="Reset Palettes?"
        message="This action will reset the palettes to its default list. All user-created palettes will be lost. Do you wish to proceed?"
        accessibilityLabelText="reset-alert-dialog-title"
        accessibilityDescriptionText="reset-alert-dialog-content-text"
        confirmText="Yes, reset palettes"
        cancelText="No, keep current palettes"
        confirmAction={() =>
          asyncLocalStorage
            .removeItem("palettes")
            .then(() => window.location.reload())
        }
        cancelAction={closeResetDialog}
      />
    </>
  );
};

PaletteList.propTypes = {
  palettes: PropTypes.arrayOf(
    PropTypes.shape({
      colors: PropTypes.arrayOf(
        PropTypes.shape({
          color: PropTypes.string,
          name: PropTypes.string,
        })
      ),
      emoji: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  deletePalette: PropTypes.func,
};

export default withRouter(PaletteList);
