import { UserContext } from "../App"
import { useContext } from "react"
import { getProductById } from "../products"
import { Link } from "react-router-dom"

export default function Header() {
    const { cart } = useContext(UserContext)

    let totalPrice = 0
    cart.forEach(cartItemId => {
      const cartProduct = getProductById(cartItemId)
      totalPrice = totalPrice + cartProduct.price
    })

    return (
        <div className="header">
            <Link to="/"><h1 className="header__logo">Doll Shop</h1></Link>
            <div className="header__cart-value cart-value">
                <div>
                    <img className="cart-value__cart-icon" width="50" height="50" src="/cart-basket-ui-5-svgrepo-com.svg" alt="" />
                    <div className="cart-value__number-of-products">{cart.length}</div>
                </div>
                <div className="cart-value__total-price">
                    {totalPrice.toFixed(2)}$
                </div>
                {/* <div>
                    Products in cart: <div className="cart-value__number-of-products">{cart.length}</div>
                </div> */}
            </div>
        </div>
    )
}