import React from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../products"
import Price from "../components/Price"
import { SideBySideMagnifier } from "@ricarso/react-image-magnifiers"
import AddToCartButton from "../components/AddToCartButton"
import products from "../products"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export function Carousel() {
    const { id } = useParams()
    const [index, setIndex] = React.useState(1)

    const images = [1, 2, 3]

    useEffect(() => {setIndex(1)}, [id])

    return (
        <div className="page__images-block">
            <div className="page__image-buttons">
                {images.map(image => 
                    <button className={`image-buttons__button ${index === image ? "image-buttons__button_active" : ""}`} key={image} onClick={() => setIndex(image)}>
                        <img width="50" height="50" src={`/${id}_${image}-small.jpg`} alt="" />
                    </button>
                )}
            </div>
            <div className="page__image-container">
                <SideBySideMagnifier className="page__image"
                        inPlaceMinBreakpoint={1024}
                        imageSrc={`/${id}_${index}.jpg`}
                        width="500"
                        height="500"
                        largeImageSrc={`/${id}_${index}-large.jpg`}
                />
            </div>
        </div>
    )
}

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

    return <div className="page">
        <div className="page__container">
            <div className="page__block">
                <Carousel />
                <div className="page__buy-block">
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
                    </div>
                    <AddToCartButton product={product} singlePage={true} />
                </div>
            </div>
            {productsFromSameCollection.length > 2 && <div className="page__recommendations recommendations">
                <p className="recommendations__header">More from this collection:</p>
                <div className="recommendations__row">
                    {recommendations.map(p => 
                        <Link className="recommendations__card" to={`/product/${p.id}`} key={p.id}>
                            <img className="recommendations__image" src={`/${p.id}_1.jpg`} width="150" height="150" />
                            <p className="recommendations__name">{p.brand + " " + p.collectionName + " " + p.name}</p>
                        </Link>)}
                </div>
            </div>}
        </div>
    </div>
}