import React from "react";
import { Container, Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import BasketList from "../basket-list";
import BasketForm from "../basket-form";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between("xs", "md")]: {
      padding: 0,
    },
  },
  boxConteiner: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
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

export default function BusketContainer({ basket }) {
  const classes = useStyles();

  const itemsBasket = basket
    ? basket.map((item) => {
        return <BasketList key={item.id} item={item} />;
      })
    : null;

  return (
    <Container maxWidth="md" className={classes.root}>
      <Box className={classes.boxConteiner}>
        <BasketForm></BasketForm>
        <Paper className={classes.basketItemsContainer}>{itemsBasket}</Paper>
      </Box>
    </Container>
  );
}
