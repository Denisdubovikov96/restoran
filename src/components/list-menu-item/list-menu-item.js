import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { Typography, makeStyles } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  menuListHead: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      fontWeight: 500,
    },
  },
  menuItemCont: {
    width: "50%",
    padding: 5,
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      padding: "5px 0",
    },
  },
  accor: {
    width: "100%",
  },
  toolbarDescr: {
    width: "100%",
    marginBottom: 10,
    "& p": {
      width: "100",
    },
  },
  toolbarButtons: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  groupCounter: {
    borderBottom: `1px solid #303f9f`,
    borderTop: `1px solid #303f9f`,
  },
  root: {
    padding: "4px 8px 8px",
  },
  oulinedNone: {
    "&:focus": {
      outline: "none",
    },
  },
}));

export default function MenuListItem({ item }) {
  const classes = useStyles();
  const [counter, setCounter] = useState(1);

  const handlerPlus = () => {
    setCounter(counter + 1);
  };
  const handlerMinus = () => {
    if (counter - 1 === 0) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <Box className={classes.menuItemCont}>
      <Accordion className={classes.accor}>
        <AccordionSummary
          className={classes.root}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box component="div" className={classes.menuListHead}>
            <Typography variant="body1" align="left">
              {item.name}
            </Typography>
            <Typography variant="body1" align="right">
              {item.price} $
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails className={classes.root}>
          <Box component="div" className={classes.accor}>
            <Box className={classes.toolbarDescr}>
              <Typography variant="body2">{item.description}</Typography>
            </Box>
            <Box className={classes.toolbarButtons}>
              <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
              >
                <Button
                  onClick={handlerMinus}
                  className={classes.oulinedNone}
                  size="small"
                >
                  <RemoveIcon />
                </Button>
                <Typography
                  className={classes.groupCounter}
                  variant="h6"
                  align="center"
                  color="textPrimary"
                >
                  {counter}
                </Typography>
                <Button
                  onClick={handlerPlus}
                  className={classes.oulinedNone}
                  size="small"
                >
                  <AddIcon />
                </Button>
              </ButtonGroup>
              <Button variant="contained" color="secondary">
                Add
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
