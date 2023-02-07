import Price from "./Price"

export default function Product(props) {
    return <div key={props.id} className='product products__card'>
        <div className='product__image_overlay-grey'>
            <img className='product__image' src={`/${props.id}.jpg`} alt="" />
        </div>
        <p className='product__text'>{props.name}</p>
        <Price value={props.price} />
        <div className='product__buttons-block'>
            <button onClick={props.remove} className='button product__button'>–</button>
            <div>{props.count}</div>
            <button onClick={props.add} className='button product__button'>+</button>
        </div>
    </div>
}