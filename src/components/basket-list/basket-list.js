import React from "react";
import Box from "@material-ui/core/Box";
import {
  Typography,
  makeStyles,
  Paper,
  Divider,
  IconButton,
} from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 10px",
    "& h6": {
      fontWeight: 600,
    },
  },
  boxImets: {
    padding: "0 10px",
    "& div": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  basketItemsContainer: {
    width: "calc(40% - 5px)",
    height: "fit-content",
    marginLeft: 5,
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0,
      marginTop: 10,
    },
  },
}));
export default function BasketList({ basket }) {
  const classes = useStyles();
  const total =
    basket.length > 0
      ? basket
          .reduce((accumulator, currentValue) => {
            return accumulator + currentValue.totalPrice;
          }, 0)
          .toFixed(2)
      : "0.00";
  const items =
    basket.length > 0 ? (
      basket.map((item) => {
        return (
          <Box key={item.id}>
            <Typography variant="caption">
              {item.count + "x " + item.name}
            </Typography>
            <Typography variant="caption">
              {`${item.totalPrice} $`}
              <IconButton size="small" color="secondary">
                <RemoveIcon />
              </IconButton>
            </Typography>
          </Box>
        );
      })
    ) : (
      <Typography variant="h6" align="center">
        Корзина пуста
      </Typography>
    );
  return (
    <Paper className={classes.basketItemsContainer}>
      <Box className={classes.root}>
        <Typography variant="subtitle1">Название</Typography>
        <Typography variant="subtitle1">Цена $</Typography>
      </Box>
      <Divider orientation="horizontal" />
      <Box className={classes.boxImets}>{items}</Box>
      <Divider orientation="horizontal" />
      <Box className={classes.boxImets}>
        <Typography variant="subtitle1" align="right">
          {total + " $"}
        </Typography>
      </Box>
    </Paper>
  );
}
