import React from 'react'
import Cards from './Cards';
import SideBar from './SideBar';
import { withStyles } from '@material-ui/styles'
import styles from '../styles/ShopingStyles'


function Shoping({ classes, proteins }) {
    return (
        <div className={classes.root}>
            <div className={classes.items}>
                <SideBar />
                <div className={classes.supplements}>
                    {proteins.map(p => (
                        <Cards name={p.name}
                            about={p.about}
                            img={p.img}
                            price={p.price} />
                    ))}

                </div>

            </div>

        </div>
    )
}
export default withStyles(styles)(Shoping);