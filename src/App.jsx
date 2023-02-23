import React from 'react'
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
  const itemIndex = cart.lastIndexOf(id)

  let cartCopy = [...cart]
  cartCopy.splice(itemIndex, 1)
  setCart(cartCopy)
}

export function getQuantityById(cart, id) {
  return cart.filter(itemId => itemId === id).length
}

function App() {
  const [cart, setCartState] = React.useState(() => {
    const cartData = window.localStorage.getItem('cart')
    if (cartData !== null)
      return JSON.parse(cartData);
    return [];
  })

  function setCart(value) {
    setCartState(value)
    window.localStorage.setItem('cart', JSON.stringify(value))
  }

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
