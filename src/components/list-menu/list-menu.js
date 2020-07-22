import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListMenuItem from "../list-menu-item";

const url = "https://d2vwsr3mua7yp8.cloudfront.net/";

const useStyles = makeStyles((theme) => ({
  menuItemCont: {
    "&:nth-child(odd)": {
      padding: "10px 10px 10px 0",
      [theme.breakpoints.between("xs", "md")]: {
        padding: 0,
      },
    },
    "&:nth-child(even)": {
      padding: "10px 0 10px 10px",
      [theme.breakpoints.between("xs", "md")]: {
        padding: 0,
      },
    },
  },
  accor: {
    width: "100%",
  },
  //   gridCont: {
  //     margin: "5px 0",
  //   },
  root: {
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "4px 8px 4px",
    },
  },
  expandIcon: {
    marginRight: 0,
  },
  imgContCategories: {
    width: "calc(50% - 10px)",
    margin: 5,
    minHeight: 175,
    maxHeight: 240,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "calc(100% - 10px)",
      minHeight: 130,
      maxHeight: 200,
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

  const categoryImage = pictures[`category-${categories.id}`]
    ? url + pictures[`category-${categories.id}`].filename
    : "";
  return (
    <Grid item container xs={12} className={classes.gridCont}>
      <Accordion className={classes.accor}>
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
              style={{ backgroundImage: `url(${categoryImage})` }}
            />
            {items}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
