import React from 'react'
import {Container , Button ,Typography ,Grid } from '@material-ui/core'
import useStyles from './style'

import CartItems from './CartItems/CartItems'

const Cart = ({cart}) => {
    const classes = useStyles();

    var isEmpty = true;

    if(cart.total_items !== 0){
        isEmpty = false;
    }

    const EmptyCart = () => 
       ( 
       <Typography variant="subtitle1">
        Your cart is empty
        </Typography>
        )
    

    const FilledCart = () => 
       (
           <>

       <Grid container spacing={3}>
           {cart.line_items.map((item) => 
            <Grid item xs={12} sm={6} key={item.id}>
               <CartItems item={item} />
            </Grid>
           )}
       </Grid>
        <div className={classes.cardDetails}>
             <Typography variant='h5'>
                Subtotal: {cart.subtotal.formatted_with_symbol}
             </Typography>
             <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" >Empty cart</Button>
                <Button className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>

        </div>
           </>
         
       )

    console.log(cart.total_items);

    if (!cart.line_items) return 'Loading...';
    
    return (

        <Container>
             <div >
                    <Typography  variant='h5'>
                        Your Shopping cart
                    </Typography>
                    {isEmpty ? <EmptyCart/> : <FilledCart/> }
             </div>

        </Container>
    )
}

export default Cart
