import React from 'react'
import './Footer.css'; // Import your CSS file for styling
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNasa } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-logo-section">
                    <h3 className='NasaExplorer'><SiNasa /> NASA Explorer</h3>
                    <p>Exploring the universe through NASA's open data APIs. Bringing space closer to Earth.</p>
                </div>
                <div className="footer-links">
                    <div className="footer-links-column">
                        <h4>Data Sources</h4>
                        <a href="https://data.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA Open Data Portal</a>
                        <a href="https://api.nasa.gov/#mars-photos" target="_blank" rel="noopener noreferrer">Mars Rover Photos API</a>
                        <a href="https://api.nasa.gov/#apod" target="_blank" rel="noopener noreferrer">Astronomy Picture of the Day</a>
                        <a href="https://epic.gsfc.nasa.gov/about/api" target="_blank" rel="noopener noreferrer">Earth Polychromatic Imaging Camera</a>
                        <a href="https://api.nasa.gov/#NeoWS" target="_blank" rel="noopener noreferrer">Near Earth Object Web Service</a>
                    </div>
                    <div className="footer-links-column">
                        <h4>Resources</h4>
                        <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA Official Website</a>
                        <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">API Documentation</a>
                        <a href="https://www.nasa.gov/news/" target="_blank" rel="noopener noreferrer">Space News</a>
                        <a href="https://www.nasa.gov/learning-resources/" target="_blank" rel="noopener noreferrer">Educational Resources</a>
                    </div>
                    <div className="footer-links-column">
                        <h4>Connect</h4>
                        <div className="social-icons">
                            <a href="https://github.com/Yonko-Kunal" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                        </div>
                        <p className='ConnectPara'>This project uses NASA's open APIs to provide free access to space exploration data and imagery.</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} NASA Explorer. Built with NASA's Open Data APIs. <a href="https://data.nasa.gov/" target="_blank" rel="noopener noreferrer">Data courtesy of NASA</a></p>
            </div>
        </footer>
    )
}

export default Footer