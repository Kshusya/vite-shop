import { useParams } from "react-router-dom"
import { getProductById } from "../products"
import Price from "../components/Price"
import { SideBySideMagnifier } from "@ricarso/react-image-magnifiers"
import AddToCartButton from "../components/AddToCartButton"
import products from "../products"
import { Link } from "react-router-dom"

export default function Page() {
    const { id } = useParams()

    const product = getProductById(id)

    const productsFromSameCollection = products.filter(p => {
        return p.collectionName === product.collectionName
    })
    const currentProductIndex = productsFromSameCollection
        .findIndex((p) => p.id === product.id)
    
    const recommendations = [
        productsFromSameCollection.at(currentProductIndex - 1),
        productsFromSameCollection.at((currentProductIndex + 1) % productsFromSameCollection.length)
    ]

    console.log(recommendations)

    return <div className="page">
        <div className="page__container">
            <div className="page__block">
                <SideBySideMagnifier className="page__image"
                    inPlaceMinBreakpoint={720}
                    imageSrc={`/${id}.jpg`}
                    width="470"
                    height="582"
                    largeImageSrc={`/${id}-large.jpg`}
                />
                <div className="page__description description">
                    <p className="page__name">{product.brand + " " + product.collectionName + " " + product.name}</p>
                    <div className="page__price">
                        <Price value={product.price} />
                    </div>
                    <div className="about__container">
                        <p className="about__header">About this item</p>
                        <ul className="about__list">
                            {product.description?.map(
                                (text, i) =>  <li key={i} className="about__one-point">{text}</li>)}
                        </ul>
                    </div>
                    <AddToCartButton product={product} singlePage={true} />
                </div>
            </div>
            <div className="page__recommendations recommendations">
                <p className="recommendations__text">People also choose:</p>
                {recommendations.map(p => 
                    <Link to={`/product/${p.id}`} key={p.id}><img className="recommendations__image" src={`/${p.id}.jpg`} width="150" height="150" /></Link>)}
            </div>
        </div>
    </div>
}