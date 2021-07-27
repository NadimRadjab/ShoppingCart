import React from 'react'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/SideBarStyles'



function SideBar({ classes, links }) {

    return (
        <div className={classes.root}>
            {links.map(suppm => (
                <NavLink className={classes.active} key={suppm.id} to={`/shoping/${suppm.id}`} >
                    {suppm.supplementName}
                </NavLink>
            ))}
        </div>
    )
}

export default withStyles(styles)(SideBar);