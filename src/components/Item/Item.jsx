import React from 'react';
import { Link } from 'react-router-dom';  // ✅ Import Link
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img  onClick={window.scrollTo(0,0)}src={props.image} alt={props.name} />  {/* ✅ Fixed alt attribute */}
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">  {/* ✅ Wrapped price divs inside this */}
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
