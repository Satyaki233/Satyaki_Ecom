import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png';
import useStyles from './style'

const NavBar = ({totalItems}) => {
    const classes = useStyles();
    return (
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt="commerce.js" className={classes.image} height="25px" />
                    commerce.js
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            {/* badgeContent create notification icon for items that has benn added to cart */}
                             <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
            
        </AppBar>
    )
}

export default NavBar
