import React from "react";
import {
  Container,
  Paper,
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import MoneyIcon from "@material-ui/icons/Money";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import InfoMaps from "../info-maps";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.between("xs", "md")]: {
      padding: 0,
    },
  },
  boxConteiner: {
    width: "100%",
    height: 300,
  },
  paperCont: {
    borderRadius: 0,
  },
  infoCont: {
    display: "flex",
    flexWrap: "wrap",
  },
  infoBox: {
    width: "calc(50% - 40px)",
    margin: "10px 20px",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "calc(100% - 20px)",
      margin: "10px 10px",
    },
    "& h6": {
      borderBottom: "1px solid grey",
      marginBottom: 15,
      fontWeight: 500,
      display: "flex",
      alignItems: "center",
      padding: "5px 0",
      "& svg": {
        marginRight: 5,
      },
    },
    "& span": {
      fontSize: "0.9rem",
    },
  },
  boxTime: {
    "& span": {
      display: "flex",
      justifyContent: "space-between",
      "& span:last-child": {
        fontWeight: 600,
      },
    },
  },
  boxPay: {
    "& span": {
      display: "flex",
      justifyContent: "flex-start",
      marginBottom: 8,
      "& svg": {
        marginRight: 5,
      },
    },
  },
}));
// Компонент время работы
const OpenTime = ({ item }) => {
  const openTime = new Date();
  const closeTime = new Date();
  openTime.setHours(item.begin_minute / 60);
  closeTime.setHours(item.end_minute / 60);
  openTime.setMinutes(item.begin_minute % 60);
  closeTime.setMinutes(item.end_minute % 60);
  const carentOpenTime = openTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const carentCloseTime = closeTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  let days;
  switch (item.day_of_week) {
    case 63:
      days = "Понедельник - Суббота";
      break;
    case 64:
      days = "Воскресенье";
      break;
    default:
      days = "Неизвестные дни";
  }
  return (
    <span>
      <Typography variant="caption">{days}</Typography>
      <Typography variant="caption">{`${carentOpenTime} - ${carentCloseTime}`}</Typography>
    </span>
  );
};
// Компонет способа оплаты
const PayItem = ({ item }) => {
  switch (item) {
    case "CASH":
      return (
        <Typography variant="caption">
          <ArrowForwardIcon fontSize="small" />
          Наличными ( Самовывоз, Доставка )
        </Typography>
      );
    case "ONLINE":
      return (
        <Typography variant="caption">
          <ArrowForwardIcon fontSize="small" />
          Кредитная карта самовывоз ( Самовывоз, Доставка )
        </Typography>
      );
    case "CARD":
      return (
        <Typography variant="caption">
          <ArrowForwardIcon fontSize="small" />
          Кредитная карта ( Самовывоз, Доставка )
        </Typography>
      );
    default:
      return (
        <Typography variant="caption">
          <ArrowForwardIcon fontSize="small" />
          Неизвестный способ оплаты
        </Typography>
      );
  }
};

// Експортируемый елемент
function InfoContainer({ mapsProp, infoProp }) {
  const classes = useStyles();
  const taxes = mapsProp ? mapsProp.delivery_fee : null;
  const phones = infoProp ? infoProp.phones : null;
  const address = infoProp ? infoProp.address : null;
  const payMethoud = infoProp ? infoProp.delivery_payment : null;
  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper className={classes.paperCont}>
        <Box className={classes.boxConteiner}>
          <InfoMaps mapsProp={mapsProp} />
        </Box>
        <Box className={classes.infoCont}>
          <Box className={classes.infoBox}>
            <Typography variant="subtitle1">
              <LocalShippingIcon />
              Стоимость Доставки
            </Typography>
            {taxes ? (
              <Typography variant="caption">Стоимость - {taxes} $</Typography>
            ) : null}
          </Box>
          <Box className={classes.infoBox}>
            <Typography variant="subtitle1">
              <ScheduleIcon />
              Часы Роботы
            </Typography>
            <Box className={classes.boxTime}>
              {infoProp
                ? infoProp.opening_hours.map((item) => {
                    return <OpenTime key={item.id} item={item} />;
                  })
                : null}
            </Box>
          </Box>
          <Box className={classes.infoBox}>
            <Typography variant="subtitle1">
              <LocalShippingIcon />
              Доставка
            </Typography>
            <Typography variant="caption">Во время роботы ресторана</Typography>
          </Box>
          <Box className={classes.infoBox}>
            <Typography variant="subtitle1">
              <ShoppingBasketIcon />
              Самовывоз
            </Typography>
            <Typography variant="caption">Во время роботы ресторана</Typography>
          </Box>
          <Box className={classes.infoBox}>
            <Typography variant="subtitle1">
              <MoneyIcon />
              Способ оплаты
            </Typography>
            {payMethoud ? (
              <Box className={classes.boxPay}>
                {payMethoud.map((item) => {
                  return <PayItem key={item} item={item} />;
                })}
              </Box>
            ) : null}
          </Box>
          <Box className={classes.infoBox}>
            <Typography variant="subtitle1">
              <RoomIcon />
              Адресс
            </Typography>
            <Typography variant="caption">{address}</Typography>
          </Box>
          <Box className={classes.infoBox}>
            <Typography variant="subtitle1">
              <PhoneIcon />
              Телефон
            </Typography>
            <Typography variant="caption">{phones}</Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default React.memo(InfoContainer);
