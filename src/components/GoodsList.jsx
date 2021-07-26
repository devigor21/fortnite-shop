import { useContext } from "react";
import { ShopContext } from "../context";
import { GoodsItem } from "./GoodsItem";

function GoodsList() {
  const { goods = [] } = useContext(ShopContext);
  return (
    <div className="goods">
      {
        goods.length ? goods.map(item => (<GoodsItem key={item.id} {...item} />)) : <h4 className="indigo-text">Ничего не найдено</h4>
      }
    </div>
  );
}

export { GoodsList };
