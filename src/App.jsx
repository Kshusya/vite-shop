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

    setCart(cart.filter((_, i) => i !== itemIndex))
  }

  const productsComponents = products.map(product => {
    return (
      <Product
        key={product.id}
        {...product}
        add={() => addToCart(product.id)}
        remove={() => removeFromCart(product.id)}
      />
    )
  })

  return (
    <div>
      <div>
        Products in cart: {cart.length}
      </div>
      <div className='products'>
        {productsComponents}
      </div>

    </div>
  )
}

export default App
