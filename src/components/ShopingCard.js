import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles'
import styles from '../styles/ShopingCardStyles';

function ShopingCard({
    classes,
    name,
    price,
    img, qty,
    removeQuantityCart,
    addQuantityCart,
    removeShopingCart,
}) {



    const handleAddQuantity = () => {
        addQuantityCart(name);
    }
    const handleSubtractQuantity = () => {
        removeQuantityCart(name);
    }
    const handleRemove = () => {
        removeShopingCart(name);
    }
    return (
        <Card className={classes.root} >
            <div className={classes.imgContainer}>
                <img src={img} alt={name} />

            </div>
            <div>
                <div className={classes.price}>
                    <Typography gutterBottom variant="h6" component="p">
                        {name}
                    </Typography>
                    <Typography color="textSecondary" component="h3">
                        {price.toFixed(2)}&#8364;
                    </Typography>


                </div>

                <CardActions className={classes.actions}>
                    <Button onClick={handleSubtractQuantity} size="small" color="primary">
                        <RemoveIcon />
                    </Button>

                    <span className={classes.quantity}>{qty}</span>
                    <Button onClick={handleAddQuantity} size="small" color="primary">
                        <AddIcon />
                    </Button>

                </CardActions>
                <Button onClick={handleRemove} className={classes.delete} size="small" color="primary">
                    remove
                </Button>

            </div>


        </Card>

    )

}
export default withStyles(styles)(ShopingCard);