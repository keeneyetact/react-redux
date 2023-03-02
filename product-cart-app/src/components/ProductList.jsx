import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const ProductList = () => {
  const products = useSelector(state => state.products)
  return (
    <div className="productContainer" id="lws-productContainer">
      {products && products.map((product) => {
        return <Product product={product} key={product.id} />
      })}
    </div>
  )
}

export default ProductList