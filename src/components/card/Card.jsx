import './Card.css'


function Card({icon, value, text}) {
    return (
        <div className='card'>
            <div className="card__icon">
                { icon}
            </div>

            <div className="card__value">
                <p className='value'>{value}</p>
                <p className='desc'>{text}</p>
            </div>
        </div>
    )
}

export default Card
