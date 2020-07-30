import React, { useState, useEffect, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fetchRestoran } from "../../api/GitRestorApi";

import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";

import MuiCircularProgress from "@material-ui/core/CircularProgress";
import NavBar from "../nav-bar";
const ListsContainer = React.lazy(() => import("../lists-container"));
const BasketContainer = React.lazy(() => import("../basket-container"));
const InfoContainer = React.lazy(() => import("../info-container"));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    background: {
      paper: "#eceff1",
    },
  },
});
const CircularProgress = withStyles({
  root: {
    position: "absolute",
    top: "calc(50% - 30px)",
    left: "calc(50% - 30px)",
    zIndex: 10000,
    height: 60,
    width: 60,
  },
})(MuiCircularProgress);

function App() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      setMenu(await fetchRestoran());
    };
    fetchAPI();
    return;
  }, []);
  const restName = menu ? menu.data.restaurant.company.name : null;
  const restMenus = menu ? menu.data.restaurant.menu.categories : null;
  const restPictures = menu ? menu.data.restaurant.pictures : null;
  const mapsProp = menu ? menu.data.restaurant.delivery_zones[0] : null;
  const infoProp = menu ? menu.data.restaurant : null;

  const [basket, setBasket] = useState([]);

  function handlerAddItem(item, count) {
    // берем старую корзину
    let oldBasket = basket;
    // создаем екземляр нового елемента корзины
    let newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      count: count,
      totalPrice: +(item.price * count).toFixed(2),
    };
    // обьявляем новую корзину
    if (oldBasket.length > 0) {
      // ищем одинаковые айди
      const index = oldBasket.findIndex((item) => {
        return item.id === newItem.id;
      });
      // если не нашли ничего не делаем
      if (index === undefined || index === -1) {
      } else {
        // нашли такой же айди
        let oldItem = oldBasket[index];
        // к новому елементу добавляем значения старого
        newItem.count += oldItem.count;
        newItem.totalPrice += oldItem.totalPrice;
        //  удаляем старый из масива
        oldBasket.splice(index, 1);
      }
    }
    // обьявляем новый масив
    const newBasket = [...oldBasket, newItem];
    setBasket(newBasket);
  }

  function handlerRemoveItem(id) {
    const index = basket.findIndex((item) => {
      return item.id === id;
    });
    const newBasket = [...basket.slice(0, index), ...basket.slice(index + 1)];

    setBasket(newBasket);
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar basketLenght={basket.length} title={restName} />
        <Suspense fallback={<CircularProgress color="secondary" />}>
          <Switch>
            <Route path="/info">
              <InfoContainer mapsProp={mapsProp} infoProp={infoProp} />
            </Route>
            <Route path="/basket">
              <BasketContainer basket={basket} removeItem={handlerRemoveItem} />
            </Route>
            <Route path="/">
              <ListsContainer
                addItem={handlerAddItem}
                restMenus={restMenus}
                restPictures={restPictures}
              />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
