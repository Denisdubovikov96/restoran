import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
        padding: "5px 10px",
      },
    },
    "&:nth-child(even)": {
      padding: "10px 0 10px 10px",
      [theme.breakpoints.between("xs", "md")]: {
        padding: "5px 10px",
      },
    },
  },
  accor: {
    width: "100%",
  },
  gridCont: {
    margin: "5px 0",
  },
}));

export default function ListMenu({ categories }) {
  const classes = useStyles();
  const items = categories
    ? categories.items.map((item) => {
        return (
          <Grid
            key={item.id}
            item
            xs={12}
            md={6}
            container
            className={classes.menuItemCont}
          >
            <Grid item xs={12} className={classes.menuListHead}>
              <Typography variant="body1" align="left">
                {item.name}
              </Typography>
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
    <Grid item container xs={12} className={classes.gridCont}>
      <Accordion className={classes.accor}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" className={classes.catTitle}>
            {categories.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid item xs={12} container>
            {items}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
