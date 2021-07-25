import React from 'react'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/SideBarStyles'



function SideBar({ classes, links }) {

    return (
        <div className={classes.root}>
            {links.map(supp => (
                <NavLink key={supp.id} to={`/shoping/${supp.id}`} >
                    {supp.supplementName}
                </NavLink>
            ))}
        </div>
    )
}

export default withStyles(styles)(SideBar);