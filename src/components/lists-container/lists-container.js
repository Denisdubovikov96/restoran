import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ListMenu from "../list-menu";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between("xs", "md")]: {
      padding: 0,
    },
  },
}));

export default function ListsContainer({ restMenus }) {
  const classes = useStyles();
  const menus = restMenus
    ? restMenus.map((item) => {
        return <ListMenu key={item.id} categories={item} />;
      })
    : null;
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container>{menus}</Grid>
    </Container>
  );
}
