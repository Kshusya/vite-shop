import { useParams } from "react-router-dom"
import { getProductById } from "../products"
import Price from "./Price"

export default function Page(props) {
    const {id} = useParams()

    const product = getProductById(id)

    return <div className="page">
        <div className="page__block">
            <img src={`/${id}.jpg`} width="470" alt="" />
            <div>
                <p>{product.name}</p>
                <Price value={product.price} />
            </div>
        </div>
    </div>
}