import Price from "./Price"
import { Link } from "react-router-dom"

export default function Product(props) {
    return <div key={props.id} className='product products__card'>
        <Link to={`/product/${props.id}`}>
            <div className='product__image_overlay-grey'>
                <img className='product__image' src={`/${props.id}.jpg`} alt="" />
            </div>
        </Link>
        <Link to={`/product/${props.id}`}>
            <p className='product__text'>{props.name}</p>
        </Link>
        <Link to={`/product/${props.id}`}>
            <Price value={props.price} />
        </Link>
        <div className='product__buttons-block'>
            <button onClick={props.remove} className='button product__button'>–</button>
            <div>{props.count}</div>
            <button onClick={props.add} className='button product__button'>+</button>
        </div>
    </div>
}