import React from 'react';
import ShopingCard from './ShopingCard';



function ShopingCart({ classes, cartItems }) {
    return (
        <div className=''>
            {cartItems.map(item => (
                <ShopingCard supplement={cartItems}
                    img={item.img}
                    name={item.name}
                    item={item.price} />
            ))}
        </div>
    )
};

export default ShopingCart;
