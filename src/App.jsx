import React, { useEffect } from 'react'
import Page from './pages/SingleProductPage'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import Header from './components/Header'
import CartPage from './pages/CartPage'

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

function App() {
  const [cart, setCartState] = React.useState([])

  function setCart(value) {
    setCartState(value)
    window.localStorage.setItem('cart', JSON.stringify(value))
  }

  useEffect(() => {
    const cartData = window.localStorage.getItem('cart')
    if (cartData !== null) setCartState(JSON.parse(cartData));
  }, [])

  return (
    <div className='container'>
      <UserContext.Provider value={{ cart: cart, setCart: setCart }}>
        <Header />
        <Routes>
          <Route path='/' element={<div className='products'>{<IndexPage />}</div>} />
          <Route path={`/product/:id`} element={<Page />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
