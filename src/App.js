import React,{useState , useEffect} from 'react';
import NavBar from './Components/NavBar/NavBar';
import Products from './Components/Products/Products';

import {commerce} from './lib/commerce';

const App=()=>{

  const [products ,setProduct ] = useState([])
  const [cart,setcart] = useState({})



  //feact products from api update product array 
  // respone --><Products/> --><Product/>
  const fetchProducts = async () =>{
    const {data} = await commerce.products.list();

    setProduct(data)
  }

  //fetch cart from api and update cart array
  //

  const fetchCart = async () =>{
    setcart(await commerce.cart.retrieve());
  }

  //add items in cart 
  // Nesting === handelAddTocart() --> <Products/> --> <Product/> --> <IconButton />

  const handelAddToCart = async (productId , quantity) =>{
    const item = await commerce.cart.add(productId, quantity);

    setcart(item.cart);
  }

  useEffect(()=>{

    fetchProducts();
    fetchCart();
  },[])

  console.log(products);
  console.log(cart.total_items);
    return(
      <>
         <div>
             <NavBar totalItems={cart.total_items}/>
             <Products products={products} AddToCart={handelAddToCart}/>
         </div>
      </>
    )
}

export default App;