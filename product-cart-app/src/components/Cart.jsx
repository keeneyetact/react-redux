import React from 'react'
import { useSelector } from 'react-redux'
import Bill from './Bill'
import CartItem from './CartItem'

const Cart = () => {
  const products = useSelector(state => state.products)

  const filterByCart = (product) => {
    if(product.cartQty) {
      return product
    }
  }

  return (
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          {/* <!-- Cart Item --> */}
          {products && products.filter(filterByCart).map((product) => {
            return <CartItem product={product} key={product.id} />
          })}
          {/* <!-- Cart Items Ends --> */}

        </div>

        {/* <!-- Bill Details --> */}
        <div>
          <Bill />
        </div>
      </div>
    </div>
  )
}

export default Cart