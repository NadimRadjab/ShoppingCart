import React from 'react';
import ShopingCard from './ShopingCard';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import { Button, Typography } from '@material-ui/core';
import styles from '../styles/ShopingCartStyle';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';






function ShopingCart({
    handleDrawerClose,
    open,
    cartItems,
    addQuantityCart,
    removeQuantityCart,
    removeShopingCart,
    totalPrice }) {


    const classes = styles();


    const handleClose = () => {
        handleDrawerClose();
    };

    let cartItemsCount = cartItems.length
    return (
        <div className={classes.root}>
            <CssBaseline />

            <Drawer

                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}

            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <Divider />
                {cartItemsCount <= 0 ? <Typography className={classes.empty} variant='h5' component='h2'>Shoping Cart is Empty.</Typography> :
                    <div>
                        <List className={classes.cards} >
                            <TransitionGroup>
                                {cartItems.map(item => (
                                    <CSSTransition key={item.suppmName} classNames='fade' timeout={300}>
                                        <ShopingCard
                                            removeShopingCart={removeShopingCart}
                                            removeQuantityCart={removeQuantityCart}
                                            addQuantityCart={addQuantityCart}
                                            supplement={cartItems}
                                            img={item.img}
                                            qty={item.qty}
                                            name={item.suppmName}
                                            price={item.price()}
                                            key={item.suppmName} />
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                        </List>

                        <Typography className={classes.total} variant='h5' component='h2'>Total: {totalPrice().toFixed(2)}&#8364;  </Typography>
                        <Typography className={classes.total} variant='h6' component='p'>  Includes 19% VAT </Typography>
                        <Button className={classes.checkout} variant='contained' color='default'>CHECKOUT</Button>

                    </div>
                }

                <Divider />

            </Drawer>
        </div>
    )
};

export default ShopingCart;
