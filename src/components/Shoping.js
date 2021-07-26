import React from 'react'
import Cards from './Cards';
import SideBar from './SideBar';
import { withStyles } from '@material-ui/styles'
import styles from '../styles/ShopingStyles'
import NavBar from './NavBar';


function Shoping({ classes, findSupplement, supplement }) {


    return (
        <div className={classes.root}>
            <NavBar />
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
                                supplement={findSupplement}
                            />
                        ))}

                    </div>

                </div>
            </div>
        </div>
    )
}
export default withStyles(styles)(Shoping);