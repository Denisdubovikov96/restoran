import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListMenuItem from "../list-menu-item";

const useStyles = makeStyles((theme) => ({
  menuListHead: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
  },
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
  gridCont: {
    margin: "5px 0",
  },
  root: {
    [theme.breakpoints.between("xs", "md")]: {
      padding: "4px 8px 8px",
    },
  },
}));

export default function ListMenu({ categories }) {
  const classes = useStyles();
  const items = categories
    ? categories.items.map((item) => {
        return <ListMenuItem key={item.id} item={item} />;
      })
    : null;
  return (
    <Grid item container xs={12} className={classes.gridCont}>
      <Accordion className={classes.accor}>
        <AccordionSummary
          className={classes.root}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" className={classes.catTitle}>
            {categories.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.root}>
          <Grid item xs={12} container>
            {items}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
