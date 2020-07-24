import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { Typography, makeStyles, Divider } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
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
    width: "calc(50% - 10px)",
    height: "fit-content",
    margin: 5,
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
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
    // border: "1px solid black",
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
  },
  root: {
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "4px 8px 4px",
    },
  },
  btnAdd: {
    marginRight: 12,
    padding: "4px 12px",
  },
}));

export default function MenuListItem({ item, addItem }) {
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
          IconButtonProps={{ edge: false }}
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
              <Box className={classes.groupCounter}>
                <IconButton
                  onClick={handlerMinus}
                  size="small"
                  color="secondary"
                >
                  <RemoveIcon />
                </IconButton>
                {/* надо изменить верстку потому что в групу кнопок нельзя добавлять елементы типа Typography */}
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
