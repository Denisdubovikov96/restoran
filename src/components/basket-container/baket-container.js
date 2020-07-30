import React from "react";
import { Container, Paper, makeStyles, Button } from "@material-ui/core";
import BasketList from "../basket-list";
import BasketForm from "../basket-form";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between("xs", "md")]: {
      padding: 0,
    },
  },
  boxConteiner: {
    borderRadius: 0,
    padding: 10,
    width: "calc(100% - 20px)",
    "& form": {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
    },
  },
}));

export default function BusketContainer({ basket, removeItem }) {
  const classes = useStyles();
  const total =
    basket.length > 0
      ? basket
          .reduce((accumulator, currentValue) => {
            return accumulator + currentValue.totalPrice;
          }, 0)
          .toFixed(2)
      : "0.00";

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    data.set("items", JSON.stringify(basket));
    fetch("https://nofikoff.github.io/all-restaurants/resta.json", {
      headers: {
        accept: "application/json, text/plain, */*",
      },
      referrer: "http://localhost:3000/basket",
      referrerPolicy: "no-referrer-when-downgrade",
      body: data,
      method: "POST",
      mode: "cors",
      credentials: "omit",
    });
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper className={classes.boxConteiner}>
        <form onSubmit={handleSubmit}>
          <BasketForm />
          <BasketList basket={basket} removeItem={removeItem} />
          <Button
            type="submit"
            color="primary"
            fullWidth
            variant="contained"
            style={{
              borderRadius: 0,
              marginTop: 10,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{total} $</span>
            <span>Сделать заказ</span>
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
