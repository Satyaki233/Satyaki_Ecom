import React from 'react'
import {Grid } from '@material-ui/core'
import Product from './Product/Product'

import useStyles from './style'



const Products = ({products,AddToCart}) => {
    const classes = useStyles(); 
    
    return (
        
        <main className={classes.content}>
            <div  >

            <Grid container justify="center" spacing={4} >
              {products.map(product =><div key={product.id}> <Product product={product} AddToCart={AddToCart}/></div>)}
            </Grid>

            </div>
        </main>
    )
}

export default Products
