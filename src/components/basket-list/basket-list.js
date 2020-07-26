import React from "react";
import Box from "@material-ui/core/Box";
import { Typography, makeStyles, Paper, Divider } from "@material-ui/core";

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
    padding: "5px 10px",
    "& div": {
      display: "flex",
      justifyContent: "space-between",
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
    },
  },
}));
export default function BasketList({ basket }) {
  const classes = useStyles();

  const items =
    basket.length > 0 ? (
      basket.map((item) => {
        return (
          <Box key={item.id}>
            <Typography variant="subtitle2">
              {item.name + " x" + item.count}
            </Typography>
            <Typography variant="subtitle2">{item.totalPrice} $</Typography>
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
      <Divider orientation />
      <Box className={classes.boxImets}>{items}</Box>
    </Paper>
  );
}
