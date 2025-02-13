import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
  const { id, name, priceForSale, quantity } = props;

  const { removeFromBasket, addOne, removeOne } = useContext(ShopContext);

  return (
    <li key={id} className="collection-item">
      {name}{" "}
      <i
        className="material-icons basket-adddelete"
        onClick={() => removeOne(id)}
      >
        remove
      </i>{" "}
      x{quantity}{" "}
      <i className="material-icons basket-adddelete" onClick={() => addOne(id)}>
        add
      </i>{" "}
      = {priceForSale * quantity} руб.
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => removeFromBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  );
}

export { BasketItem };
