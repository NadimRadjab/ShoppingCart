import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShopingCard from './ShopingCard';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import { Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Typography } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    navigation: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '270px',
        '& a': {
            textDecoration: 'none',
            color: 'gray',
            fontSize: '22px'
        },
        '& svg': {
            color: 'gray',
            fontSize: '40px'
        }
    },

    hide: {
        display: 'none',
    },
    drawer: {
        flexShrink: 0,
    },
    drawerHeader: {
        display: 'flex',
        width: '500px',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    total: {
        margin: '0.6rem',
        width: '70%'

    }

}));







function NavBar({
    cartItems,
    addQuantityCart,
    removeQuantityCart,
    removeShopingCart,
    totalPrice }) {


    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const classes = useStyles();
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <div className={classes.navigation}>
                <NavLink to="/" >Home</NavLink>
                <Button>
                    <ShoppingCartIcon onClick={handleDrawerOpen} />
                </Button>

            </div>

            <CssBaseline />

            <Drawer

                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}

            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />

                <List className={classes.cards} >
                    {cartItems.map(item => (
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
                    ))}

                </List>
                <Typography className={classes.total} variant='h5' component='h2'>Total: {totalPrice().toFixed(2)}&#8364;  </Typography>
                <Typography className={classes.total} variant='h6' component='p'>  Includes 19% VAT </Typography>

                <Divider />

            </Drawer>

        </div>
    )
}
export default NavBar;