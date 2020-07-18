import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  icon: {
    padding: 0,
  },
});

export default function DenseAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dence">
          <IconButton edge="start" color="inherit" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <SendIcon className={classes.icon} fontSize="small" color="primary" />
            </MenuItem>
            <MenuItem>
              <DraftsIcon fontSize="small" color="primary" />
            </MenuItem>
            <MenuItem>
              <InboxIcon fontSize="small" color="primary" />
            </MenuItem>
          </Menu>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
