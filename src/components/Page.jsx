import { useParams } from "react-router-dom"
import { getProductById } from "../products"
import Price from "./Price"
import { SideBySideMagnifier } from "@ricarso/react-image-magnifiers"

export default function Page() {
    const {id} = useParams()

    const product = getProductById(id)

    return <div className="page">
        <div className="page__block">
            {/* <img src={`/${id}.jpg`} width="470" alt="" /> */}
            <SideBySideMagnifier className="page__image"
                imageSrc={`/${id}.jpg`} width="470"
                largeImageSrc={`/${id}-large.jpg`}
            />
            <div className="page__description">
                <p className="page__name">{product.name}</p>
                <Price value={product.price} />
            </div>
        </div>
    </div>
}