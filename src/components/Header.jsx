import { UserContext } from "../App"
import { useContext } from "react"
import { getProductById } from "../products"
import { Link } from "react-router-dom"

export function calculateTotalPrice(cart) {

    let totalPrice = 0
    cart.forEach(cartItemId => {
      const cartProduct = getProductById(cartItemId)
      totalPrice = totalPrice + cartProduct.price / 100.0
    })
    return totalPrice
}

export default function Header() {
    const { cart } = useContext(UserContext)

    return (
        <div className="header">
            <Link to="/"><h1 className="header__logo">Doll Shop</h1></Link>
            <Link to={`/cart`}>
                <div className="header__cart-value cart-value">
                    <div className="position-relative">
                        <img className="cart-value__cart-icon" width="50" height="50" src="/cart-basket-ui-5-svgrepo-com.svg" alt="" />
                        <div className="cart-value__number-of-products">{cart.length}</div>
                    </div>
                    <div className="cart-value__total-price">
                        {calculateTotalPrice(cart).toFixed(2)}$
                    </div>
                </div>
            </Link>
        </div>
    )
}