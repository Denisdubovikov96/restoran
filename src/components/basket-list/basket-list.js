import React from "react";
import Box from "@material-ui/core/Box";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 10px",
    "&>p": {
      color: "#000000a6",
    },
  },
}));
export default function BasketList({ item }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">{item.name}</Typography>
      <Typography variant="subtitle2">{item.totalPrice}</Typography>
    </Box>
  );
}
