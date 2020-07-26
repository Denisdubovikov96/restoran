import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListMenuItem from "../list-menu-item";

const useStyles = makeStyles((theme) => ({
  accor: {
    width: "100%",
  },
  root: {
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "4px 8px 4px",
    },
  },
  imgContCategories: {
    width: "calc(50% - 10px)",
    margin: 5,
    minHeight: 200,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    order: "100",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 10px)",
      minHeight: 230,
      order: "-1",
    },
    [theme.breakpoints.down("xs")]: {
      width: "calc(100%)",
      minHeight: 130,
      margin: "5px 0",
    },
  },
  detailsBox: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
}));

export default function ListMenu({ categories, addItem, pictures }) {
  const classes = useStyles();
  const items = categories
    ? categories.items.map((item) => {
        return <ListMenuItem key={item.id} addItem={addItem} item={item} />;
      })
    : null;
  //   Длеаем ссылку на картинку и добавляем инлайн стилем
  const url = "https://d2vwsr3mua7yp8.cloudfront.net/";
  const categoryImage = pictures[`category-${categories.id}`]
    ? url + pictures[`category-${categories.id}`].filename
    : false;
  const visible = categoryImage ? "block" : "none";
  return (
    <Grid item container xs={12}>
      <Accordion square={true} className={classes.accor}>
        <AccordionSummary
          className={classes.root}
          expandIcon={<ExpandMoreIcon />}
          IconButtonProps={{ edge: false }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">{categories.name}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.root}>
          <Box className={classes.detailsBox}>
            <Box
              className={classes.imgContCategories}
              style={{
                backgroundImage: `url(${categoryImage})`,
                display: `${visible}`,
              }}
            />
            {items}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
