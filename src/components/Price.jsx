export default function Price(props) {
    const whole = Math.floor(props.value / 100.0)
    const fraction = String(parseInt(props.value % 100))
        .padStart(2, '0');

    return props.value !== null && <div className='price'>
        <div className={`price__block ${props.centered && 'price__block_centered'}`}>
            <span className='price__symbol'>$</span>
            <span className='price__whole'>{whole}</span>
            <span className='price__fraction'>{fraction}</span>
        </div>
    </div>
}