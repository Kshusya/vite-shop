import { useState } from 'react'
import './style.scss'
import products from './products'
import Product from './components/Product'

function App(props) {
  const [cart, setCart] = useState([])

  function addToCart(id) {
    setCart([...cart, id])
  }

  function removeFromCart(id) {
    const itemIndex = cart.findIndex(value => value === id)

    // --I have two ways to write this code, the first one:
    // setCart(cart.filter((_, i) => i !== itemIndex))
    // --and the second one:
    let cartCopy = [...cart]
    cartCopy.splice(itemIndex, 1)
    setCart(cartCopy)
  }


  const productsComponents = products.map(product => {
    let count = cart.filter(itemId => itemId === product.id).length

    return (
      <Product
        key={product.id}
        {...product}
        add={() => addToCart(product.id)}
        remove={() => removeFromCart(product.id)}
        count={count}
      />
    )
  })
  
  let totalPrice = 0
  cart.forEach(cartItemId => {
    const cartProduct = products.find(product => product.id == cartItemId)
    totalPrice = totalPrice + cartProduct.price
  })

  return (
    <div>
      <div>
        Products in cart: {cart.length}, total price: {totalPrice.toFixed(2)}
      </div>
      <div className='products'>
        {productsComponents}
      </div>

    </div>
  )
}

export default App
