import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../images/logo.png'

const Navbar = ({setShowHome}) => {
  const products = useSelector(state => state.products)
  const totalCart = products.reduce((total, product) => total + product.cartQty, 0)

  const handleShowHome = (e) => {
    e.preventDefault()
    setShowHome(true)
  }

  const handleShowCart = (e) => {
    e.preventDefault()
    setShowHome(false)
  }
  return (
    <nav class="bg-[#171C2A] py-4">
    <div class="navBar">
      <a onClick={handleShowHome} href="#home" >
        <img src={logo} alt="LWS" class="max-w-[140px]" />
      </a>

      <div class="flex gap-4">
        <a href='#home' onClick={handleShowHome} class="navHome" id="lws-home"> Home </a>
        <a href='#cart' onClick={handleShowCart} class="navCart" id="lws-cart">
          <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
          <span id="lws-totalCart">{totalCart}</span>
        </a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar