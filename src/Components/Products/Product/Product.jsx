import React from 'react'
import {Card , CardMedia ,CardContent , CardActions,Typography ,IconButton } from '@material-ui/core'
import{ AddShoppingCart } from '@material-ui/icons'

import useStyles from './style'


const Product = ({product , AddToCart }) => {
    const classes = useStyles();
    

    

    return (
        <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.media.source} title={product.name} />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Rs. {product.price.formatted}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html : product.description }} variant="body2" color="textSecondary" component="p" />
          {/*  dangerouslySetInnerHTML={{ __html : product.description }} makes the string to HTML for display */}
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart" onClick={() =>{AddToCart(product.id , 1)}} >
            <AddShoppingCart  />
          </IconButton>
        </CardActions>
      </Card>
    )
}

export default Product