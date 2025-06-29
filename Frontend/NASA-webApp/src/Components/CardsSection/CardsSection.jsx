// import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Import Link component
//import './CardsSection.css'
import roverImg from '../../assets/images/mars-v2.jpg'

const CardsSection = () => {

    return (
        <div className="cardsSection flex flex-col w-[40rem]">
            {/* Link to MarsRover page */}
            <div className="cardsSectionTitle">
                <h1 className="text-center text-[1.5rem] mb-8 md:text-[2rem]">Explore</h1>
            </div>
            <Link to="/marsrover" className="card-link ">
                <div className="card group relative w-fit mx-auto hover:scale-110 transition-all">
                    <img
                        src={roverImg}
                        className="w-[12rem] h-[20rem] object-cover md:w-[20rem] md:h-[30rem] "
                        alt="Mars Rover"
                    />
                    {/* Dark overlay, brightens on hover */}
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/0 transition-all duration-300 rounded" />
                    <h1 className="absolute bottom-0 left-0 text-white text-sm md:text-lg bg-transparant px-2 py-1 z-10">
                        Mars
                    </h1>
                </div>
            </Link>
        </div>

    )
}

export default CardsSection