import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import InfoIcon from "@material-ui/icons/Info";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 24px",
  },
}));

export default function DenseAppBar({ title, basketLenght }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(false);
  const handleClick = () => {
    setAnchorEl(!anchorEl);
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.root} variant="dense">
        <IconButton edge="start" color="inherit" onClick={handleClick} >
          <Badge badgeContent={basketLenght} color="secondary">
            <MenuIcon />
          </Badge>
        </IconButton>
        <SwipeableDrawer
          open={anchorEl}
          onOpen={handleClick}
          onClose={handleClick}
          anchor="left"
        >
          <Link to="/">
            <IconButton>
              <MenuBookIcon fontSize="default" color="primary" />
            </IconButton>
          </Link>
          <Link to="/info">
            <IconButton>
              <InfoIcon fontSize="default" color="primary" />
            </IconButton>
          </Link>
          <Link to="/basket">
            <IconButton>
              <Badge badgeContent={basketLenght} color="secondary">
                <ShoppingCartIcon fontSize="default" color="primary" />
              </Badge>
            </IconButton>
          </Link>
        </SwipeableDrawer>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
