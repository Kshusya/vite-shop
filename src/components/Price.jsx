export default function Price(props) {
    return <div className='price'>
        <span className='price__symbol'>$</span>
        <span className='price__whole'>{Math.floor(props.value)}</span>
        <span className='price__fraction'>{parseInt(props.value * 100 % 100)}</span>
    </div>
}