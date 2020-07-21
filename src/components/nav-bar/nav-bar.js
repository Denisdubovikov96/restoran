import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import InfoIcon from "@material-ui/icons/Info";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 24px",
  },
}));

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
      <Toolbar className={classes.root} variant="dense">
        <IconButton edge="start" color="inherit" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          style={{ top: 16, left: -8 }}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/">
            <MenuItem>
              <MenuBookIcon fontSize="default" color="primary" />
            </MenuItem>
          </Link>

          <Link to="/corzina">
            <MenuItem>
              <InfoIcon fontSize="default" color="primary" />
            </MenuItem>
          </Link>

          <Link to="/info">
            <MenuItem>
              <ShoppingBasketIcon fontSize="default" color="primary" />
            </MenuItem>
          </Link>
        </Menu>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
