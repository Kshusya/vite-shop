import React from 'react'
import './style.scss'
import products, { getProductById } from './products'
import Product from './components/Product'
import Page from './pages/Page'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import Header from './components/Header'

export const UserContext = React.createContext()

export function addToCart(cart, setCart, id) {
  setCart([...cart, id])
}

export function removeFromCart(cart, setCart, id) {
  const itemIndex = cart.findIndex(value => value === id)

  // --I have two ways to write this code, the first one:
  // setCart(cart.filter((_, i) => i !== itemIndex))
  // --and the second one:
  let cartCopy = [...cart]
  cartCopy.splice(itemIndex, 1)
  setCart(cartCopy)
}

export function getQuantityById(cart, id) {
  return cart.filter(itemId => itemId === id).length
}

function App(props) {
  const [cart, setCart] = React.useState([])

  return (
    <div>
      <UserContext.Provider value={{ cart: cart, setCart: setCart }}>
        <Header />
        <Routes>
          <Route path="/" element={<div className='products'>{<IndexPage />}</div>} />
          <Route path={`/product/:id`} element={<Page />} />
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
