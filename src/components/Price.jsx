export default function Price(props) {
    const whole = Math.floor(props.value)
    const fraction = String(parseInt(props.value * 100 % 100))
        .padStart(2, '0');

    return <div className='price'>
        <div className='price__block'>
            <span className='price__symbol'>$</span>
            <span className='price__whole'>{whole}</span>
            <span className='price__fraction'>{fraction}</span>
        </div>
    </div>
}