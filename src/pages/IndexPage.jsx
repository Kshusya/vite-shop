import products from "../products"
import { UserContext } from "../App"
import { useContext } from "react"
import { addToCart, removeFromCart, getQuantityById } from "../App"
import Product from "../components/Product"

export default function IndexPage(props) {
    const { cart, setCart } = useContext(UserContext)

    const productsComponents = products.map(product => {

        let count = getQuantityById(cart, product.id)

        return (
            <Product
                key={product.id}
                {...product}
                add={() => addToCart(cart, setCart, product.id)}
                remove={() => removeFromCart(cart, setCart, product.id)}
                count={count}
            />
        )
    })

    return productsComponents
}