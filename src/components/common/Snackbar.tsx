import React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const PREFIX = "Snackbar";

const classes = {
  close: `${PREFIX}-close`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.close}`]: {
    padding: theme.spacing(0.5),
  },
}));

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Root>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">Note archived</span>}
        action={[
          <Button
            key="undo"
            color="secondary"
            size="small"
            onClick={handleClose}
          >
            DISMISS
          </Button>,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
            size="large"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Root>
  );
}
