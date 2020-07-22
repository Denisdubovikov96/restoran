import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import BasketList from "../basket-list";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between("xs", "md")]: {
      padding: 0,
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
      <Grid container>
        <Grid item xs={12} md={6}>
          <h2>Форма</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          {itemsBasket}
        </Grid>
      </Grid>
    </Container>
  );
}
