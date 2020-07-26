import React from "react";
import { Container, Box, makeStyles, Grid } from "@material-ui/core";

import ListMenu from "../list-menu";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between("xs", "md")]: {
      padding: 0,
    },
  },
  imgContMain: {
    width: "100%",
    minHeight: 175,
    maxHeight: 240,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
}));

export default function ListsContainer({ restMenus, addItem, restPictures }) {
  // Делаем ссылку и добавляем инлайн стилем
  const url = "https://d2vwsr3mua7yp8.cloudfront.net/";
  const menuImage = restPictures
    ? url + restPictures["desktop_widget"].filename
    : false;
  const classes = useStyles();
  const menus = restMenus
    ? restMenus.map((item) => {
        return (
          <ListMenu
            key={item.id}
            addItem={addItem}
            categories={item}
            pictures={restPictures}
          />
        );
      })
    : null;

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Box
            className={classes.imgContMain}
            style={{
              backgroundImage: `url(${menuImage})`,
              //   display: `${visible}`,
            }}
          />
        </Grid>
        {menus}
      </Grid>
    </Container>
  );
}
