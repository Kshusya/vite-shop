import Price from "./Price"
import { Link } from "react-router-dom"

export default function Product(props) {
    return <div key={props.id} className='product products__card'>
        <div>
            <Link to={`/product/${props.id}`}>
                <div className='product__image_overlay-grey'>
                    <img width="250" height="250" className='product__image' src={`/${props.id}.jpg`} alt="" />
                </div>
            </Link>
            <Link to={`/product/${props.id}`}>
                <p className='product__text'>{props.collectionName + " " + props.name}</p>
            </Link>
        </div>
        <div>
            <Link to={`/product/${props.id}`}>
                <Price centered={true} value={props.price} />
            </Link>
            {props.price !== null && <div className='product__buttons-block'>
                <button onClick={props.remove} className='button product__button'>–</button>
                <div>{props.count}</div>
                <button onClick={props.add} className='button product__button'>+</button>
            </div>}
        </div>
    </div>
}