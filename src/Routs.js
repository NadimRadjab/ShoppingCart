import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import supplements from './supplements';
import App from './App';
import Shoping from './components/Shoping';
import Page from './components/Page';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';


function Routs() {

    const [supplement] = useState(supplements);
    const [shopingCart, setShopingCart] = useState([]);

    const findSupplement = id => {
        return supplement.find(suppm => {
            return suppm.id === id;
        });
    }

    const addToShopingCart = (array, name) => {

        return array.map(suppm => {

            if (suppm.suppmName === name) {

                setShopingCart(prev => {

                    const isItemInCart = prev.find(item => item.suppmName === name);
                    if (isItemInCart) {
                        return prev.map(item => (
                            item.suppmName === name
                                ? { ...item, qty: item.qty + suppm.qty }
                                : item
                        ))

                    }

                    return [...prev, suppm];
                })

            }

        })

    }
    const addQuantityCart = (name) => {

        let newPrice = (shopingCart.map(suppm => {
            if (suppm.suppmName === name) {

                return { ...suppm, qty: suppm.addQty() }

            }
            return suppm;


        }))
        setShopingCart(newPrice);

    }
    const removeQuantityCart = (name) => {

        let newPrice = shopingCart.map(suppm => {

            if (suppm.suppmName === name && suppm.qty > 1) {

                return { ...suppm, qty: suppm.subtractQty() }

            }
            return suppm;

        })

        setShopingCart(newPrice);
    }

    const removeShopingCart = (name) => {
        let newShopingCart = shopingCart.filter(item => item.suppmName !== name);
        setShopingCart(newShopingCart)
    }
    const totalPrice = () => {
        let total = shopingCart.reduce((prev, cur) => cur.price() * 1.19 + prev, 0);

        return total;
    }


    return (
        <BrowserRouter>
            <Route render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition key={location.key} classNames='page' timeout={300}>
                        <Switch location={location}>

                            <Route exact path='/'
                                render={(...routeProps) =>
                                    <Page  >
                                        <App
                                            routeProps={routeProps}
                                            totalPrice={totalPrice}
                                            cartItems={shopingCart}
                                            removeShopingCart={removeShopingCart}
                                            addQuantityCart={addQuantityCart}
                                            removeQuantityCart={removeQuantityCart}

                                        /> </Page>} />



                            <Route
                                exact path='/shoping/:id'
                                render={(routeProps) =>
                                    <Page>
                                        <Shoping
                                            totalPrice={totalPrice}
                                            removeShopingCart={removeShopingCart}
                                            addQuantityCart={addQuantityCart}
                                            removeQuantityCart={removeQuantityCart}
                                            cartItems={shopingCart}
                                            supplement={supplement}
                                            addToShopingCart={addToShopingCart}
                                            findSupplement={findSupplement(routeProps.match.params.id)}
                                        /> </Page>} />

                            <Route
                                render={(...routeProps) =>
                                    <Page>
                                        <App
                                            routeProps={routeProps}
                                            totalPrice={totalPrice}
                                            cartItems={shopingCart}
                                            removeShopingCart={removeShopingCart}
                                            addQuantityCart={addQuantityCart}
                                            removeQuantityCart={removeQuantityCart}

                                        /> </Page>} />



                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />


        </BrowserRouter>
    )

}


export default Routs;