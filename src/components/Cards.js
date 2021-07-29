import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import styles from '../styles/CardStyles';

function Cards({ classes, img, name, about, supplement, addToShopingCart }) {
    const [quantity, setQuantity] = useState(1);
    const [newSupplements, setNewSupplements] = useState([])


    useEffect(() => {
        const updatePrice = supplement.suppm.map(suppm => {
            let newObj = {
                suppmName: suppm.name,
                img: suppm.img,
                qty: 1,
                price: function () {

                    return suppm.price * this.qty
                },
                addQty: function () {

                    return ++this.qty
                },
                subtractQty: function () {

                    return --this.qty
                }

            }
            // return { ...suppm, price: suppm.price * quantity };
            return newObj
        })


        setNewSupplements(updatePrice)


    }, [quantity])


    const addQuantity = () => {
        // setQuantity(quantity + 1);
        let newPrice = (newSupplements.map(suppm => {
            if (suppm.suppmName === name) {

                return { ...suppm, qty: suppm.addQty() }

            }
            return suppm


        }))
        setNewSupplements(newPrice)

    }
    const removeQuantity = () => {

        let newPrice = newSupplements.map(suppm => {

            if (suppm.suppmName === name && suppm.qty > 1) {

                return { ...suppm, qty: suppm.subtractQty() }

            }
            return suppm;

        })

        setNewSupplements(newPrice);
    }
    const handleShoping = () => {
        addToShopingCart(newSupplements, name)
    }

    let currentPrice = newSupplements.map(p => {
        if (p.suppmName === name) {
            return p.price().toFixed(2);
        }
    })
    let currentQty = newSupplements.map(p => {
        if (p.suppmName === name) return p.qty

    })


    return (
        <Card className={classes.root} >
            <CardActionArea>
                <img src={img} alt={name} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography color="textSecondary" component="h2">
                        {about}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Typography color="textSecondary" component="h3">
                    {currentPrice}&#8364;
                </Typography>
                <Button onClick={addQuantity} size="small" color="primary">
                    <ArrowUpwardIcon />
                </Button>
                <span>{currentQty}</span>
                <Button onClick={removeQuantity} size="small" color="primary">
                    <ArrowDownwardIcon />
                </Button>
                <Button onClick={handleShoping} size="small" color="primary">
                    Add To Cart
                </Button>
            </CardActions>

        </Card>
    )

}
export default withStyles(styles)(Cards);
