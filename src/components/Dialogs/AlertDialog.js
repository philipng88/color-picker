import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const AlertDialog = ({
  open,
  title,
  message,
  accessibilityLabelText,
  accessibilityDescriptionText,
  confirmText,
  cancelText,
  confirmAction,
  cancelAction,
}) => (
  <Dialog
    open={open}
    aria-labelledby={accessibilityLabelText}
    aria-describedby={accessibilityDescriptionText}
  >
    <DialogTitle id={accessibilityLabelText}>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id={accessibilityDescriptionText}>
        {message}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={confirmAction}>
        {confirmText}
      </Button>
      <Button color="secondary" onClick={cancelAction}>
        {cancelText}
      </Button>
    </DialogActions>
  </Dialog>
);

export default AlertDialog;
