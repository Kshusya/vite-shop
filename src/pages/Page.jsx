import { useParams } from "react-router-dom"
import { getProductById } from "../products"
import Price from "../components/Price"
import { SideBySideMagnifier } from "@ricarso/react-image-magnifiers"
import { UserContext } from "../App"
import { useContext } from "react"
import { addToCart, removeFromCart } from "../App"
import { getQuantityById } from "../App"

export default function Page(props) {
    const {id} = useParams()

    const { cart, setCart } = useContext(UserContext)

    const product = getProductById(id)

    const count = getQuantityById(cart, product.id)

    let addToCartButton

    if (count === 0) {
        addToCartButton = (<button
            className={`button ${count > 0 && 'page__add-button'}`} onClick={() => addToCart(cart, setCart, product.id)}>
            Add product
        </button>)
    } else {
        addToCartButton = (<div>
            <button 
                onClick={() => removeFromCart(cart, setCart, product.id)}
                className='button product__button'>–</button>
            <div>{count}</div>
            <button
                onClick={() => addToCart(cart, setCart, product.id)}
                className='button product__button'>+</button>
        </div>)
    }

    return <div className="page">
        <div className="page__container">
            {/* <img src={`/${id}.jpg`} width="470" alt="" /> */}
            <SideBySideMagnifier className="page__image"
                imageSrc={`/${id}.jpg`} width="470" height="582"
                largeImageSrc={`/${id}-large.jpg`}
            />
            <div className="page__description description">
                <p className="page__name">{product.collectionName + " " + product.name}</p>
                <div className="page__price">
                    <Price value={product.price} />
                </div>
                <div className="about__container">
                    <p className="about__header">About this item</p>
                    <ul className="about__list">
                        {product.collectionName === "Bratz 20 Yearz Special Anniversary Edition Original Fashion Doll" && <li className="about__one-point">20 YEARZ SPECIAL EDITION: In celebration of Bratz turning 20 yearz old, collect these special edition fashion dolls in gorgeous foil packaging, featuring a 20 yearz motif and collectible holographic poster</li>}
                        <li className="about__one-point">ICONIC TRAPEZOID PACKAGING: Now in all new, special edition holographic packaging that shows off {product.name}'s personal style.</li>
                        <li className="about__one-point">SUPER STYLIN’ FASHIONS: {product.name} includes 2 outfits for tons of mix ‘n’ match possibilities!</li>
                        <li className="about__one-point">INCLUDES: 1 {product.collectionName}, fashions, 2 pairs of shoes, accessories, hair brush, and holographic poster.</li>
                    </ul>
                </div>
                {addToCartButton}
            </div>
        </div>
    </div>
}