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

function Cards({ classes, img, name, about, supplement }) {
    const [quantity, setQuantity] = useState(1);
    const [newSupplements, setNewSupplements] = useState([])


    useEffect(() => {
        const updatePrice = supplement.suppm.map(suppm => {

            return { ...suppm, price: suppm.price * quantity }
        })


        setNewSupplements(updatePrice)

    }, [quantity])


    const addQuantity = () => {
        setQuantity(quantity + 1);

    }
    const removeQuantity = (name) => {

        if (quantity <= 1) return;

        setQuantity(quantity - 1);

        const updatePrice = newSupplements.map(suppm => {
            if (suppm.name === name) {
                return { ...suppm, price: suppm.price / quantity }
            }
            return suppm
        })
        setNewSupplements(updatePrice)
    }

    let currentPrice = newSupplements.map(p => {
        if (p.name === name) {
            return p.price
        }
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
                <span>{quantity}</span>
                <Button onClick={() => removeQuantity(name)} size="small" color="primary">
                    <ArrowDownwardIcon />
                </Button>


            </CardActions>
        </Card>
    )

}
export default withStyles(styles)(Cards);
