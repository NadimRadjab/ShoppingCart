import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles'
import styles from '../styles/ShopingCardStyles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function ShopingCard({ classes, name, price, img, }) {

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <img src={img} alt={name} />

                <Typography gutterBottom variant="h6" component="p">
                    {name}
                </Typography>


            </CardActionArea>
            <Typography color="textSecondary" component="h3">
                {price}
                {/* {currentPrice}&#8364; */}
            </Typography>
            <CardActions className={classes.actions}>

                <Button size="small" color="primary">
                    <ArrowUpwardIcon />
                </Button>
                {/* <span>{quantity}</span> */}
                <Button size="small" color="primary">
                    <ArrowDownwardIcon />
                </Button>

            </CardActions>
            <Button size="small" color="primary">
                delete
            </Button>

        </Card>

    )

}
export default withStyles(styles)(ShopingCard);