import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  menuListHead: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  menuItemCont: {
    padding: 10,
  },
});

export default function ListMenu({ categories }) {
  console.log(categories);
  const classes = useStyles();
  const items = categories
    ? categories.items.map((item) => {
        console.log(item);
        return (
          <Grid item xs={12} md={6} container className={classes.menuItemCont}>
            <Grid item xs={12} className={classes.menuListHead}>
              <Typography variant="body1">{item.name}</Typography>
              <Typography variant="body1" align="right">
                {item.price} $
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">{item.description}</Typography>
            </Grid>
          </Grid>
        );
      })
    : null;
  return (
    <Grid item container xs={12}>
      <Grid item xs={12} container>
        <Typography variant="h5" className={classes.catTitle}>
          {categories.name}
        </Typography>
      </Grid>
      <Grid item xs={12} container>
        {items}
      </Grid>
    </Grid>
  );
}
