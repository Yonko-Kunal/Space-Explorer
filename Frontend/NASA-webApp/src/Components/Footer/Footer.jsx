import React from 'react'
// import './Footer.css'; 
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNasa } from "react-icons/si";

const Footer = () => {
    return (

        <footer className="bg-[#1a1a1a] text-[#f5f5f5] py-12 px-20 p-[4rem] font-sans">
            <div className="flex flex-col justify-between gap-8 pb-8 border-b border-[#4a4a4a] md:flex-row">
                <div className="md:basis-1/4 w-full mb-6 md:mb-0">
                    <h3 className="flex items-center gap-2 text-2xl mb-4 text-[#f5f5f5]"><SiNasa /> NASA Explorer</h3>
                    <p className="text-sm text-[#a0a0a0] leading-relaxed">This project is not affiliated with NASA.</p>
                </div>
                <div className="flex flex-col md:flex-row flex-grow gap-5 md:gap-20 w-full">
                    <div className="flex flex-col w-64 mb-6 md:mb-0">
                        <h4 className="text-lg mb-6 text-[#f5f5f5] font-medium">Data Sources</h4>
                        <a href="https://data.nasa.gov/" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] no-underline mb-4 text-sm transition-colors duration-300 cursor-pointer relative z-10 hover:text-[#388bfd] hover:underline">NASA Open Data Portal</a>
                        <a href="https://api.nasa.gov/#mars-photos" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] no-underline mb-4 text-sm transition-colors duration-300 cursor-pointer relative z-10 hover:text-[#388bfd] hover:underline">Mars Rover Photos API</a>
                        <a href="https://api.nasa.gov/#apod" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] no-underline mb-4 text-sm transition-colors duration-300 cursor-pointer relative z-10 hover:text-[#388bfd] hover:underline">Astronomy Picture of the Day</a>
                        <a href="https://epic.gsfc.nasa.gov/about/api" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] no-underline mb-4 text-sm transition-colors duration-300 cursor-pointer relative z-10 hover:text-[#388bfd] hover:underline">Earth Polychromatic Imaging Camera</a>
                        <a href="https://api.nasa.gov/#NeoWS" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] no-underline mb-4 text-sm transition-colors duration-300 cursor-pointer relative z-10 hover:text-[#388bfd] hover:underline">Near Earth Object Web Service</a>
                    </div>
                    <div className="flex flex-col w-64 mb-6 md:mb-0">
                        <h4 className="text-lg mb-6 text-[#f5f5f5] font-medium">Resources</h4>
                        <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] no-underline mb-4 text-sm transition-colors duration-300 cursor-pointer relative z-10 hover:text-[#388bfd] hover:underline">NASA Official Website</a>
                        <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] no-underline mb-4 text-sm transition-colors duration-300 cursor-pointer relative z-10 hover:text-[#388bfd] hover:underline">API Documentation</a>
                        <a href="https://www.nasa.gov/news/" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] no-underline mb-4 text-sm transition-colors duration-300 cursor-pointer relative z-10 hover:text-[#388bfd] hover:underline">Space News</a>
                        <a href="https://www.nasa.gov/learning-resources/" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] no-underline mb-4 text-sm transition-colors duration-300 cursor-pointer relative z-10 hover:text-[#388bfd] hover:underline">Educational Resources</a>
                    </div>
                    <div className="flex flex-col w-64">
                        <h4 className="text-lg mb-6 text-[#f5f5f5] font-medium">Connect</h4>
                        <div className="flex gap-4 mb-4">
                            <a href="https://github.com/Yonko-Kunal" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] text-xl transition-colors duration-300 hover:text-[#388bfd]"> <FaGithub /> </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] text-xl transition-colors duration-300 hover:text-[#388bfd]"> <FaExternalLinkAlt /> </a>
                        </div>
                        <p className="text-sm text-[#a0a0a0] leading-relaxed">This project uses NASA's open APIs to provide free access to space exploration data and imagery.</p>
                    </div>
                </div>
            </div>
            <div className="pt-6 text-center text-sm text-[#a0a0a0]">
                <p>&copy; {new Date().getFullYear()} NASA Explorer. Built with NASA's Open Data APIs. <a href="https://data.nasa.gov/" target="_blank" rel="noopener noreferrer" className="text-[#388bfd] hover:underline">Data courtesy of NASA</a></p>
            </div>
        </footer>
    )
}

export default Footer