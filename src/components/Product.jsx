import Price from "./Price"

export default function Product(props) {
    return <div key={props.id} className='product products__card'>
        <div className='product__image_overlay-grey'>
            <img className='product__image' src={`/${props.id}.jpg`} alt="" />
        </div>
        <p className='product__text'>{props.name}</p>
        <Price value={props.price} />
        <div className='product__buttons'>
            <button onClick={props.remove}>-</button>
            <button onClick={props.add}>+</button>
        </div>
    </div>
}