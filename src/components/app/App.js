import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fetchRestoran } from "../../api/GitRestorApi";

import NavBar from "../nav-bar";
import ListsContainer from "../lists-container";

function App() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      setMenu(await fetchRestoran());
    };
    fetchAPI();
  }, []);
  const restName = menu ? menu.data.restaurant.company.name : null;
  const restMenus = menu ? menu.data.restaurant.menu.categories : null;

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
      console.log(index);
      // если не нашли ничего не делаем
      if (index === undefined || index === -1) {
        console.log("не нашли");
      } else {
        console.log("нашли");
        // нашли такой же айди
        let oldItem = oldBasket[index];
        // к новому елементу добавляем значения старого
        newItem.count += oldItem.count;
        newItem.totalPrice += +(newItem.price * newItem.count).toFixed(2);
        //  удаляем старый из масива
        oldBasket.splice(index, 1);
      }
    }
    // обьявляем новый масив
    const newBasket = [...oldBasket, newItem];
    setBasket(newBasket);
  }
  return (
    <Router>
      <NavBar title={restName}></NavBar>
      <Switch>
        <Route path="/info">
          <h2>Тут будет информация</h2>
        </Route>
        <Route path="/corzina">
          <h2>Тут будет корзина</h2>
        </Route>
        <Route path="/" exact >
          <ListsContainer addItem={handlerAddItem} restMenus={restMenus} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
