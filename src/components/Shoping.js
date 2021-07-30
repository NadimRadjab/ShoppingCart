import React, { useState } from 'react'
import Cards from './Cards';
import SideBar from './SideBar';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/styles'
import styles from '../styles/ShopingStyles'
import NavBar from './NavBar';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'


function Shoping({
    classes,
    findSupplement,
    supplement,
    addToShopingCart,
    cartItems,
    addQuantityCart,
    removeQuantityCart,
    removeShopingCart,
    totalPrice }) {

    const [open, setOpen] = React.useState(true);

    const closeSnackBar = () => {
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <NavBar
                totalPrice={totalPrice}
                cartItems={cartItems}
                addQuantityCart={addQuantityCart}
                removeQuantityCart={removeQuantityCart}
                removeShopingCart={removeShopingCart} />
            <div className={classes.cards}>
                <div className={classes.items}>
                    <SideBar links={supplement} />
                    <div className={classes.supplements}>
                        {findSupplement.suppm.map(p => (
                            <Cards
                                key={p.name}
                                name={p.name}
                                about={p.about}
                                img={p.img}
                                addToShopingCart={addToShopingCart}
                                supplement={findSupplement}
                            />
                        ))}

                    </div>

                </div>
            </div>
            <Snackbar
                onClose={closeSnackBar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={open}
                autoHideDuration={3000}
                message={<span id='message'>Hi</span>}
                ContentProps={{ "aria-describedby": 'message' }}
                action={<IconButton onClick={closeSnackBar}>
                    <CloseIcon color='inherit' key='close' aria-label='close' />
                </IconButton>} />
        </div>
    )
}
export default withStyles(styles)(Shoping);