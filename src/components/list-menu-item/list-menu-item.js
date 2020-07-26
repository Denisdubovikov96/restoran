import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Button,
  Box,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
    width: "100%",
    margin: "5px 0",
    [theme.breakpoints.up("sm")]: {
      width: "calc(50% - 10px)",
      height: "fit-content",
      margin: 5,
    },
  },
  accor: {
    width: "100%",
  },
  toolbarDescr: {
    width: "100%",
    marginBottom: 10,
    "& p": {
      width: "100%",
    },
  },
  toolbarButtons: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  groupCounter: {
    display: "flex",
    alignItems: "center",
  },
  root: {
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "4px 8px 4px",
    },
  },
  btnAdd: {
    padding: "4px 12px",
  },
}));

export default function MenuListItem({ item, addItem }) {
    console.log("рендерим елемент категории");
  const classes = useStyles();
  const [counter, setCounter] = useState(1);
  const handlerPlus = () => {
    setCounter(counter + 1);
  };
  const handlerMinus = () => {
    counter - 1 === 0 ? setCounter(1) : setCounter(counter - 1);
  };
  return (
    <Box className={classes.menuItemCont}>
      <Accordion className={classes.accor}>
        <AccordionSummary
          className={classes.root}
          expandIcon={<ExpandMoreIcon />}
          IconButtonProps={{ edge: false }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box component="div" className={classes.menuListHead}>
            <Typography variant="body2" align="left">
              {item.name}
            </Typography>
            <Typography variant="body2" align="right">
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
              <Box className={classes.groupCounter}>
                <IconButton
                  onClick={handlerMinus}
                  size="small"
                  color="secondary"
                >
                  <RemoveIcon />
                </IconButton>
                <Typography variant="subtitle1" align="center">
                  {counter}
                </Typography>
                <IconButton onClick={handlerPlus} size="small" color="primary">
                  <AddIcon />
                </IconButton>
              </Box>
              <Button
                className={classes.btnAdd}
                onClick={() => {
                  addItem(item, counter);
                  setCounter(1);
                }}
                variant="contained"
                color="secondary"
              >
                {(counter * item.price).toFixed(2) + " $"}
                <Divider
                  style={{ margin: "0 5px" }}
                  orientation="vertical"
                  flexItem
                />
                Add
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
