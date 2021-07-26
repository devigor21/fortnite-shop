import { useEffect, useContext } from "react";

import { ShopContext } from "../context";

import { GoodsList } from "../components/GoodsList";
import { Preloader } from "../components/Preloader";
import { BasketList } from "../components/BasketList";
import { Cart } from "../layout/Cart";
import { Alert } from "../components/Alert";
import { API_KEY, API_URL } from "../config";

const Shop = () => {
  const {
    loading,
    order,
    isBasketShow,
    alertName,
    setGoods
  } = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { 'Authorization': API_KEY }
    }).then(responce => responce.json())
      .then(data => {
        data.featured && setGoods(data.featured);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); // eslint-disable-line

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};

export { Shop };
