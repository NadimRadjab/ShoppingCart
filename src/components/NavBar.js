import React from 'react';
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from '../styles/NavBarStyles'


function NavBar({ classes }) {
    return (
        <div className={classes.root}>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/shoping-cart" ><ShoppingCartIcon /></NavLink>
        </div>
    )
}
export default withStyles(styles)(NavBar);