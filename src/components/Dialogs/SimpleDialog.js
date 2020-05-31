import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { blue, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  confirmAvatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  cancelAvatar: {
    backgroundColor: red[100],
    color: red[600],
  },
});

const SimpleDialog = ({
  open,
  accessibilityLabelText,
  title,
  confirmText,
  cancelText,
  closeDialog,
  confirmAction,
  cancelAction,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      aria-labelledby={accessibilityLabelText}
      onClose={closeDialog}
    >
      <DialogTitle id={accessibilityLabelText}>{title}</DialogTitle>
      <List>
        <ListItem
          button
          onClick={() => {
            confirmAction();
            closeDialog();
          }}
        >
          <ListItemAvatar>
            <Avatar className={classes.confirmAvatar}>
              <CheckIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText>{confirmText}</ListItemText>
        </ListItem>
        <ListItem button onClick={cancelAction}>
          <ListItemAvatar>
            <Avatar className={classes.cancelAvatar}>
              <CloseIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText>{cancelText}</ListItemText>
        </ListItem>
      </List>
    </Dialog>
  );
};

export default SimpleDialog;
