import React from 'react'
import "./Card.css"

const Card = ({name, price, img}) => {
    return (

        <div className="card">
            <img src={img} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">₹{price}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
        

    )
}

export default Card