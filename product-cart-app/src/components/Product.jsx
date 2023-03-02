import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/product/action'


const Product = ({product}) => {
  const { id, name, category, thumbnail, price, quantity } = product
  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault()
    console.log(id)
    dispatch(addToCart(id))
  }
  return (
    <div>
        {/* <!-- product item --> */}
        <div className="lws-productCard">
          <img className="lws-productImage" src={thumbnail} alt="product" />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">{name}</h4>
            <p className="lws-productCategory">{category}</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
              <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
            </div>
            <button onClick={handleAddToCart} disabled={!quantity} className="lws-btnAddToCart">Add To Cart</button>
          </div>
        </div>
        {/* <!-- product item ends --> */}
      </div>
  )
}

export default Product