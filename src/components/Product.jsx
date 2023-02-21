import Price from "./Price"
import { Link } from "react-router-dom"
import AddToCartButton from "./AddToCartButton"
import { getProductById } from "../products"

export default function Product(props) {
    const product = getProductById(props.id)

    return <div key={props.id} className='product products__card'>
        <div>
            <Link to={`/product/${props.id}`}>
                <div className='product__image_overlay-grey'>
                    <img width="250" height="250" className='product__image' src={`/${props.id}.jpg`} alt="" />
                </div>
            </Link>
            <Link to={`/product/${props.id}`}>
                <p className='product__text'>{props.brand + " " + props.collectionName + " " + props.name}</p>
            </Link>
        </div>
        <div>
            <Link to={`/product/${props.id}`}>
                <Price centered={true} value={props.price} />
            </Link>
            <AddToCartButton product={product} singleProduct={true} />
        </div>
    </div>
}