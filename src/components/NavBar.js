import React from 'react';
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';
import ShopingCart from './ShopingCart';
import styles from '../styles/NavBarStyles';
import { withStyles } from '@material-ui/styles';






function NavBar({
    classes,
    cartItems,
    addQuantityCart,
    removeQuantityCart,
    removeShopingCart,
    totalPrice }) {


    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    let cartItemsCount = cartItems.length
    return (
        <div className={classes.root}>
            <div className={classes.navigation}>
                <NavLink to="/" >Home</NavLink>
                <Button onClick={handleDrawerOpen}>
                    <ShoppingCartIcon />
                    {cartItemsCount <= 0 ? null : <span className={classes.count}>{cartItems.length}</span>}
                </Button>

            </div>


            <ShopingCart
                handleDrawerClose={handleDrawerClose}
                open={open}
                cartItems={cartItems}
                addQuantityCart={addQuantityCart}
                removeQuantityCart={removeQuantityCart}
                removeShopingCart={removeShopingCart}
                totalPrice={totalPrice}
            />


        </div>
    )
}
export default withStyles(styles)(NavBar);