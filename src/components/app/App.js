import React, { useState, useEffect, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fetchRestoran } from "../../api/GitRestorApi";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";
import NavBar from "../nav-bar";
const ListsContainer = React.lazy(() => import("../lists-container"));
const BasketContainer = React.lazy(() => import("../basket-container"));

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

function App() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      console.log("рендерим Апп");
      setMenu(await fetchRestoran());
    };
    fetchAPI();
  }, []);
  const restName = menu ? menu.data.restaurant.company.name : null;
  const restMenus = menu ? menu.data.restaurant.menu.categories : null;
  const restPictures = menu ? menu.data.restaurant.pictures : null;
  // console.log(restPictures);

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

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar basketLenght={basket.length} title={restName} />
        <Suspense
          fallback={
            <CircularProgress
              color="secondary"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                zIndex: 10000,
                transform: "scale(3)",
              }}
            />
          }
        >
          <Switch>
            <Route path="/info">
              <h2>Тут будет информация</h2>
            </Route>
            <Route path="/basket">
              <BasketContainer basket={basket} />
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
