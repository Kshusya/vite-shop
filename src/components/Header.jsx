import { UserContext } from "../App"
import { useContext } from "react"
import { getProductById } from "../products"

export default function Header() {
    const { cart, setCart } = useContext(UserContext)

    let totalPrice = 0
    cart.forEach(cartItemId => {
      const cartProduct = getProductById(cartItemId)
      totalPrice = totalPrice + cartProduct.price
    })

    return (
        <div>
            Products in cart: {cart.length}, total price: {totalPrice.toFixed(2)}
        </div>
    )
}