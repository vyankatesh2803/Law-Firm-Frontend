import GiftIcon from './gift-icon.png'
import './WcuCard.css'

export default ({percentage}) => {
    return (
        <div className='card-wrapper'>
            <img src={GiftIcon}/>
            <div className="success-rate">{percentage}% Success Rate</div>
            <div className="lorem-ipsum card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</div>
            <button>Read More</button>
        </div>
    )
}