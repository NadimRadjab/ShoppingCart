import React, { useState, useEffect } from 'react'
import Cards from './Cards';
import SideBar from './SideBar';
import { withStyles } from '@material-ui/styles'
import styles from '../styles/ShopingStyles'


function Shoping({ classes, stuff, items }) {
    // const [quantity, setQuantity] = useState(1);
    // const [item, setItem] = useState(stuff.supm)


    // useEffect(() => {
    //     const updatePrice = stuff.supm.map(suppm => {

    //         return { ...suppm, price: suppm.price * quantity }
    //     })

    //     setItem(updatePrice)
    //     console.log(updatePrice)

    // }, [])

    // const addQuantity = (name) => {
    //     setQuantity(quantity + 1)
    //     const updatePrice = stuff.supm.map(suppm => {
    //         if (suppm.name === name) {
    //             return { ...suppm, price: suppm.price * quantity }
    //         }
    //         return suppm
    //     })

    //     setItem(updatePrice)
    // }
    // const removeQuantity = (name) => {
    //     if (quantity <= 2) return
    //     setQuantity(quantity - 1)
    //     const updatePrice = item.map(suppm => {
    //         if (suppm.name === name) {
    //             return { ...suppm, price: suppm.price / quantity }
    //         }
    //         return suppm
    //     })
    //     setItem(updatePrice)
    // }

    return (
        <div className={classes.root}>
            <div className={classes.items}>
                <SideBar links={stuff.supm} />
                <div className={classes.supplements}>
                    {stuff.supm.map(p => (
                        <Cards
                            key={p.name}
                            name={p.name}
                            about={p.about}
                            img={p.img}
                            stuff={stuff}
                            // quantity={quantity}
                            // addQuantiy={addQuantity}
                            // removeQuantity={removeQuantity}
                            price={p.price}
                        />
                    ))}

                </div>

            </div>

        </div>
    )
}
export default withStyles(styles)(Shoping);