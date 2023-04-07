import React from 'react'
import Product from './Product'
function ProductList(props) {
    //console.log(props)
  return (
    props.productList.length > 0 ?
    props.productList.map((product, i) => {
        return <Product product={product} key={i} incrementQuantity = {props.incrementQuantity} index={i} decrementQuantity = {props.decrementQuantity} removeItem = {props.removeItem}/>
    })
    : <h1>Your cart is empty</h1>
  )
}

export default ProductList
