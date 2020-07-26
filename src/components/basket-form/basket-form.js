import React from "react";
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
  const [expanded, setExpanded] = React.useState(false);
  const [delivery, setDelivery] = React.useState("Самовывоз");
  const [payment, setPayment] = React.useState("Наличные");
  const [date, setDate] = React.useState(new Date());
  const [name, setName] = React.useState();
  const [surname, setSurname] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className={classes.formContainer}>
      <Accordion
        expanded={expanded === "panelContact"}
        onChange={handleChange("panelContact")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Контакт</Typography>
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
            />
            <TextField
              className={classes.textFieldFull}
              size="small"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="email"
              label="Електронная почта"
              variant="outlined"
            />
            <TextField
              className={classes.textFieldFull}
              size="small"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              id="phone"
              label="Телефон"
              variant="outlined"
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
              error={false}
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
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>
            Fulfillment options
          </Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </Box>
  );
}
