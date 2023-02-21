import products, { getProductById } from "../products"
import { UserContext } from "../App"
import { useContext } from "react"
import { addToCart, removeFromCart, getQuantityById } from "../App"
import { Link } from "react-router-dom"
import Price from "../components/Price"
import AddToCartButton from "../components/AddToCartButton"
import { calculateTotalPrice } from "../components/Header"

function ProductsInCart(props) {
    const product = getProductById(props.id)
    console.log(product)

    return <div key={props.id}>
        <div className="product cart__card">
            <div className="cart__description">
                <Link to={`/product/${props.id}`}>
                    <div className='cart__image_overlay-grey'>
                        <img width="100" height="100" className='cart__image' src={`/${props.id}.jpg`} alt="" />
                    </div>
                </Link>
                <Link to={`/product/${props.id}`}>
                    <p className='cart__text'>{props.brand + " " + props.collectionName + " " + props.name}</p>
                </Link>
            </div>
            <div className="cart__price">
                <Price centered={true} value={props.price} />
                <AddToCartButton product={product} singleProduct={true} />
            </div>
        </div>
    </div>
}

export default function cartProduct() {
    const { cart, setCart } = useContext(UserContext)

    const uniqueProducts = new Set(cart)

    const productCart = Array.from(uniqueProducts).map(productId => {
        const product = getProductById(productId)

        let count = getQuantityById(cart, product.id)

        return (
            <ProductsInCart
                key={product.id}
                {...product}
                add={() => addToCart(cart, setCart, product.id)}
                remove={() => removeFromCart(cart, setCart, product.id)}
                count={count}
            />
        )
    })

    return <><div className="product-cart-block">
        <div className='cart'>{productCart}</div>
        <div className='total'>
            <button className="total__button">Proceed to checkout</button>
            <div className="total__subtotal">Subtotal: {calculateTotalPrice(cart).toFixed(2)}$</div>
        </div>
    </div>
    </>
}