import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
  const { name, full_background, id, description, price } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className='card'>
      <div className='card-image'>
        {
          full_background === '' ? <img className="activator" src={`https://via.placeholder.com/300x445?text=${name}`} alt={name} /> : <img className="activator" src={full_background} alt={name} />
        }
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn'
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Купить
        </button>
        <span className='right' style={{ fontSize: '1.8rem' }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
