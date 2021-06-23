import React from 'react'
import {Container , Button ,Typography ,Grid } from '@material-ui/core'


const Cart = ({cart}) => {
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
       <h1>
           ok
       </h1>
       )

    console.log(cart.total_items);
    
    return (

        <Container>
             <div >
                    <Typography  variant='h3'>
                        Your Shopping cart
                    </Typography>
                    {isEmpty ? <EmptyCart/> : <FilledCart/> }
             </div>

        </Container>
    )
}

export default Cart
