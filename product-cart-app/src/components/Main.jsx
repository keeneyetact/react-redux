import React, { useState } from 'react'
import Cart from './Cart'
import Input from './Input'
import Navbar from './Navbar'
import ProductList from './ProductList'

const Main = () => {
    const [showHome, setShowHome] = useState(true)
  return (
    <div>
        <Navbar setShowHome={setShowHome} />
      <div className="py-16">
      {showHome ? 
      <div className="productWrapper">
          <ProductList />
          <Input />
      </div> : <Cart />}
      </div>
    </div>
  )
}

export default Main