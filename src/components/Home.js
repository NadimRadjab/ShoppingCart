import React from 'react'
import { withStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styles from '../styles/HomeStyles'
import NavBar from './NavBar'

function Home({ classes, cartItems, removeShopingCart, addQuantityCart, removeQuantityCart, totalPrice }) {
    return (
        <div className={classes.root}>

            <NavBar cartItems={cartItems}
                totalPrice={totalPrice}
                addQuantityCart={addQuantityCart}
                removeQuantityCart={removeQuantityCart}
                removeShopingCart={removeShopingCart} />

            <div className={classes.stuff}>
                <div className={classes.items}>
                    <h1>Tiger Mode Supplements</h1>
                    <h2>Now available for order globally.</h2>
                    <Link to='/shoping/proteins-sup'>
                        <Button variant='contained' color='default'>
                            Shop Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Home)