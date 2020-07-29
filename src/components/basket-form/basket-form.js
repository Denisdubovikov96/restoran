import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import ErrorOutlineSharpIcon from "@material-ui/icons/ErrorOutlineSharp";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 600,
  },
  textFieldFull: {
    width: "100%",
    margin: "5px 0",
  },
  textFieldHalf: {
    width: "calc(50% - 5px)",
    margin: "5px 0",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  contactBox: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  formContainer: {
    width: "calc(60% - 5px)",
    marginRight: 5,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginRight: 0,
    },
  },
  errorIcon: {
    color: theme.palette.error.main,
    marginLeft: 10,
  },
}));
const Accordion = withStyles({
  root: {
    "&$expanded": {
      margin: 0,
    },
    "&$rounded": {
      borderRadius: 0,
    },
  },
  expanded: {},
  rounded: {},
})(MuiAccordion);

export default function BasketForm() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [delivery, setDelivery] = useState("Самовывоз");
  const [payment, setPayment] = useState("Наличные");
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(true);
  const [phone, setPhone] = useState();
  const [phoneError, setPhoneError] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const emailChange = (event) => {
    const emailReg = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    setEmailError(!emailReg.test(event.target.value));
    setEmail(event.target.value);
  };
  const phoneChange = (event) => {
    const phoneReg = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/gm;
    setPhoneError(!phoneReg.test(event.target.value));
    setPhone(event.target.value);
  };
  return (
    <Box className={classes.formContainer}>
      <Accordion
        expanded={
          expanded === "panelContact" ||
          phoneError ||
          emailError ||
          surname === "" ||
          name === ""
        }
        onChange={handleChange("panelContact")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Контакт</Typography>
          {phoneError || emailError || surname === "" || name === "" ? (
            <ErrorOutlineSharpIcon className={classes.errorIcon} />
          ) : null}
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.contactBox}>
            <TextField
              className={classes.textFieldHalf}
              size="small"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              id="name"
              label="Имя"
              variant="outlined"
              error={name === ""}
              required
            />
            <TextField
              className={classes.textFieldHalf}
              size="small"
              name="surname"
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
              id="surname"
              label="Фамилия"
              variant="outlined"
              error={surname === ""}
              required
            />
            <TextField
              className={classes.textFieldFull}
              size="small"
              name="email"
              value={email}
              onChange={emailChange}
              id="email"
              label="Електронная почта"
              variant="outlined"
              required
              error={emailError}
            />
            <TextField
              className={classes.textFieldFull}
              size="small"
              name="phone"
              value={phone}
              onChange={phoneChange}
              id="phone"
              label="Телефон"
              variant="outlined"
              required
              error={phoneError}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panelDelivery"}
        onChange={handleChange("panelDelivery")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Способ доставки</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            aria-label="delivery"
            name="delivery"
            value={delivery}
            onChange={(event) => setDelivery(event.target.value)}
          >
            <FormControlLabel
              value="Самовывоз"
              control={<Radio color="primary" />}
              label="Самовывоз"
            />
            <FormControlLabel
              value="Доставка"
              control={<Radio color="primary" />}
              label="Доставка"
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panelTime"}
        onChange={handleChange("panelTime")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Выберите время</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <KeyboardDateTimePicker
              name="time"
              value={date}
              ampm={false}
              onChange={setDate}
              label="Время"
              minDate={new Date()}
              format="yyyy/MM/dd hh:mm a"
              helperText="Введите время"
            />
          </MuiPickersUtilsProvider>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panelPay"}
        onChange={handleChange("panelPay")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Способ оплаты</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            aria-label="payment"
            name="payment"
            value={payment}
            onChange={(event) => setPayment(event.target.value)}
          >
            <FormControlLabel
              value="Наличные"
              control={<Radio color="primary" />}
              label="Наличные"
            />
            <FormControlLabel
              value="Карта"
              control={<Radio color="primary" />}
              label="Карта"
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      {payment === "Карта" ? (
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>Форма оплаты</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      ) : null}
    </Box>
  );
}
