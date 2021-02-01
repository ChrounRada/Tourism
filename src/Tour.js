import React, {useState}from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
    const [ReadMore, SetReadMore] = useState(false)
    return (
        <article className="single-tour">
            <img src={image} alt={name}/>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {ReadMore ? info: `${info.substring(0,200)}...`}
                    <button onClick={() => SetReadMore(!ReadMore)}>
                        {ReadMore ? 'Show Less' : 'Read More'}​
                    </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>
                    Not interest
                </button>
            </footer>
        </article>
    )
}

export default Tour