import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../redux/product/action'

const initialProduct = {
  "name": "",
  "category": "",
  "thumbnail": "",
  "price": "",
  "quantity": "",
  "cartQty": 0,
  "cartTotal":0,
  "id": 0,
}

const Input = () => {
  const dispatch = useDispatch()
  
  const [productData, setProductData] = useState(initialProduct)

  const handleChange = (e) => {
    setProductData({...productData, [e.target.name] : e.target.value})
    console.log(productData)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(addProduct(productData))
    initialProduct.id = initialProduct.id + 1 
    setProductData(initialProduct)
  }
  return (
    <div>
        {/* <!-- Product Input Form --> */}
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
            {/* <!-- product name --> */}
            <div className="space-y-2">
              <label for="name">Product Name</label>
              <input onChange={handleChange} name="name" value={productData.name}
               className="addProductInput" id="lws-inputName name" type="text" required />
            </div>
            {/* <!-- product category --> */}
            <div className="space-y-2">
              <label for="category">Category</label>
              <input onChange={handleChange} name="category" value={productData.category}
               className="addProductInput" id="lws-inputCategory category" type="text" required />
            </div>
            {/* <!-- product image url --> */}
            <div className="space-y-2">
              <label for="image">Image Url</label>
              <input onChange={handleChange} name="thumbnail" value={productData.thumbnail}
               className="addProductInput" id="lws-inputImage image" type="text" required />
            </div>
            {/* <!-- price & quantity container --> */}
            <div className="grid grid-cols-2 gap-8 pb-4">
              {/* <!-- price --> */}
              <div className="space-y-2">
                <label for="price">Price</label>
                <input onChange={handleChange} name="price" value={productData.price}
                 className="addProductInput" type="number" id="lws-inputPrice" required />
              </div>
              {/* <!-- quantity --> */}
              <div className="space-y-2">
                <label for="quantity">Quantity</label>
                <input onChange={handleChange} name="quantity" value={productData.quantity}
                 className="addProductInput" type="number" id="lws-inputQuantity" required />
              </div>
            </div>
            {/* <!-- submit button --> */}
            <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
          </form>
        </div>
        {/* <!-- Product Input Form Ends --> */}
      </div>
  )
}

export default Input