import { addToCart, removeFromCart } from "../App"
import { useContext } from "react"
import { UserContext } from "../App"
import { getQuantityById } from "../App"

export default function AddToCartButton({ product, singlePage, singleProduct }) {
    const { cart, setCart } = useContext(UserContext)

    const count = getQuantityById(cart, product.id)

    let changeFontSize
    if (singlePage) {
         changeFontSize = 'page'
    } else if (singleProduct) {
        changeFontSize = 'product'
    }

    if (product.price !== null) {
        if (count === 0) {
            return (<button
                className={`button ${count === 0 && `${changeFontSize}__add-button`}`} onClick={() => addToCart(cart, setCart, product.id)}>
                Add product
            </button>)
        } else {
            return (<div className={`button ${changeFontSize}__buttons-block`}>
                <button 
                    onClick={() => removeFromCart(cart, setCart, product.id)}
                    className={`button ${changeFontSize}__button`}>–</button>
                <div>{count}</div>
                <button
                    onClick={() => addToCart(cart, setCart, product.id)}
                    className={`button ${changeFontSize}__button`}>+</button>
            </div>)
        }
    } else if (product.price === null) {
        return <p className={`${changeFontSize}__price-unavailable`}>Currently unavailable</p>
    }
}
