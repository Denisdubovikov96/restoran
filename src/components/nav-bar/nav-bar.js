import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import InfoIcon from "@material-ui/icons/Info";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  toolbarMy: {
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
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClick}
          aria-controls="customized-menu"
          aria-haspopup="true"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          style={{ top: 30, left: -8 }}
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <Link to="/">
              <MenuBookIcon fontSize="default" color="primary" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/corzina">
              <InfoIcon fontSize="default" color="primary" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/info">
              <ShoppingBasketIcon fontSize="default" color="primary" />
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
