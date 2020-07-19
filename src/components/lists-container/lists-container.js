import React from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ListMenu from "../list-menu";

export default function ListsContainer({ restMenus }) {
  console.log(restMenus);
  const menus = restMenus
    ? restMenus.map((item) => {
        return <ListMenu categories={item} />;
      })
    : null;
  return (
    <Container maxWidth="lg">
      <Grid container>{menus}</Grid>
    </Container>
  );
}
