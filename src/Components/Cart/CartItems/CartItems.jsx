import React from 'react'
import {Typography , Button , Card ,CardContent , CardActions, CardMedia } from '@material-ui/core'

import useStyles from './style'


const CartItems = ({item}) => {
    const classes = useStyles();
    return (
        <Card>
          <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
              <Typography variant='h4'>{item.name}</Typography>
              <Typography variant='h5'>Price : {item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
             <CardActions className={classes.cardActions}>
               <div className={classes.buttons}>
                  <Button size='small' type='button' > - </Button>
                  <Typography>{item.quantity}</Typography>
                  <Button size='small' type='button' > + </Button>
               </div>
               <Button variant="contained" color="secondary">
                   REMOVE
               </Button>
             </CardActions>
       

        </Card>
    )
}

export default CartItems
