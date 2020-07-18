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
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  icon: {
    padding: 0,
  },
});

export default function DenseAppBar({ title }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
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
            <Link to="/">
              <SendIcon fontSize="default" color="primary" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/corzina">
              <DraftsIcon fontSize="default" color="primary" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/info">
              <InboxIcon fontSize="default" color="primary" />
            </Link>
          </MenuItem>
        </Menu>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
