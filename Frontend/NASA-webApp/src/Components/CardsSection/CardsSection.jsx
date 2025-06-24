// import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Import Link component
import './CardsSection.css'
import roverImg from '../../assets/images/rover.webp'

const CardsSection = () => {

    return (
        <div className="cardsSection">
            {/* Link to MarsRover page */}
            <div className="cardsSectionTitle">
                <h1>Explore</h1>
            </div>
            <Link to="/marsrover" className="card-link">
                <div className="card">
                    <img src={roverImg} />
                    <h1>Explore Mars</h1>
                    <p>Surface image of mars captured by NASA's Rovers Curiosity and Perseverance</p>
                    <button className="cardButton">Explore</button>
                </div>
            </Link>
        </div>
    )
}

export default CardsSection