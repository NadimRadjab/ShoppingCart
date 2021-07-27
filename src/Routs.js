import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import supplements from './supplements';
import App from './App';
import Shoping from './components/Shoping';
import ShopingCart from './components/ShopingCart';

function Routs() {
    const [supplement, setSupplement] = useState(supplements);
    const [shopingCart, setShopingCart] = useState([]);

    const findSupplement = id => {
        return supplement.find(suppm => {
            return suppm.id === id
        });
    }


    const addToShopingCart = (array, name) => {
        array.map(suppm => {
            if (suppm.name === name) {
                setShopingCart([...shopingCart, suppm])
            }
        })

    }


    return (

        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => <App cartItems={shopingCart} />} />
                <Route
                    exact path='/shoping/:id'
                    render={(routeProps) => <Shoping
                        cartItems={shopingCart}
                        supplement={supplement}
                        addToShopingCart={addToShopingCart}
                        findSupplement={findSupplement(routeProps.match.params.id)}
                    />} />


                <Route
                    exact path='/shoping-cart'
                    render={() => <ShopingCart cartItems={shopingCart} />} />
            </Switch>

        </BrowserRouter>
    )

}


export default Routs;