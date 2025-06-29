import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-scroll'
import './Hero.css'
import CardsSection from '../CardsSection/CardsSection'
import Navbar from '../Navigation/Navbar'
import MarsRoverImg from '../../assets/images/NLF_1000_0755717720_847ECM_N0474404NCAM12000_04_195J01_1200.jpg'
import paleBlueDot from '../../assets/images/pale-blue-dot-revised.webp'
import carlSagan from '../../assets/images/carlSagan.png'
import AnimatedSection from '../AnimatedSection/AnimatedSection'

function Hero() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrollY(window.scrollY)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Calculate opacity and upward movement based on scroll position
    const opacity = Math.max(1 - scrollY / 800, 0)
    // const textTransform = `translateY(${-scrollY * 0.8}px)`
    const starsTransform = `translateY(${scrollY * 0.25}px)`

    // Calculate blur and translateY for motion blur effect
    const blurAmount = `${Math.min(scrollY / 40, 7)}px` // max 7px blur
    const blurTranslateY = `${-scrollY * 0.8}px`

    // Generate stars
    const generateStars = (count, size) => {
        return Array.from({ length: count }, (_, i) => {
            const isShooting = Math.random() < 0.02
            const duration = `${Math.random() * 3 + 2}s`
            const delay = `${Math.random() * 10}s`

            return (
                <div
                    key={`${size}-${i}`}
                    className={`star ${size}-stars`}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: delay,
                        animationDuration: duration,
                        animationName: isShooting ? 'shooting' : undefined,
                        zIndex: isShooting ? 10 : 0
                    }}
                />
            )
        })
    }

    const smallStars = useMemo(() => generateStars(20, 'small'), [])
    const mediumStars = useMemo(() => generateStars(20, 'medium'), [])
    const largeStars = useMemo(() => generateStars(100, 'large'), [])

    return (
        <div className="relative min-h-screen bg-[#0d0d0d]">
            <Navbar />

            <div className="relative h-screen">
                <div className="stars-container" style={{ opacity, transform: starsTransform }}>
                    <div className="stars small-stars">{smallStars}</div>
                    <div className="stars medium-stars">{mediumStars}</div>
                    <div className="stars large-stars">{largeStars}</div>
                </div>

                <div
                    className="main-content absolute top-0 left-0 w-full max-w-full h-screen flex flex-col items-center justify-center gap-8 box-border overflow-x-hidden px-10 md:px-0"
                    style={{
                        opacity: opacity,
                        // transform: textTransform,
                        '--blur-amount': blurAmount,
                        '--blur-translate-y': blurTranslateY
                    }}
                >
                    <h1 className="universe-title text-[3rem] font-bold text-[#f5f5f5]  text-center select-none md:text-[8rem]">THE UNIVERSE</h1>
                    <p className="universe-description text-[#a0a0a0] font-light text-center">The universe is a vast and mysterious place. It is home to billions of stars, planets, and galaxies.</p>
                    <div className="universe-button-container flex text-[2rem]  gap-5 md:gap-8 md:text-[3rem]">
                        <Link to="cards-section" smooth={true} duration={800}>
                            <button className="universeExploreBUtton bg-white text-black px-9 py-2.5 rounded text-base font-normal transition-all duration-200 hover:bg-transparent hover:text-white hover:border hover:border-white hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0.25rem_0.25rem_0_0_#fff]">EXPLORE</button>
                        </Link>
                        <Link to="learn-more-section" smooth={true} duration={800}>
                            <button className="universeLearnMoreButton bg-transparent border border-[#f5f5f5] text-[#f5f5f5] px-9 py-2.5 rounded text-base font-normal transition-all duration-200 hover:bg-[#f5f5f5] hover:text-[#0d0d0d] hover:shadow-[0_0_0_2px_#a0a0a0]">LEARN MORE</button>
                        </Link>
                    </div>
                </div>
            </div>

            <AnimatedSection className="cards-section" id="cards-section">
                <CardsSection />
            </AnimatedSection>
            <div className="LearnMoreSection" id="learn-more-section">
                <AnimatedSection>
                    <h1 className='LearnMoreSectionTitle text-[1.5rem] md:text-[2rem]'> Learn More About This Project</h1>
                </AnimatedSection>
                <AnimatedSection className="sectionOne">
                    <p>This website brings you real images from the surface of Mars, captured by NASA's rovers — the Curiosity and Perseverance rovers. These stunning visuals are retrieved in real-time using NASA's Mars Rover Photos API, a publicly available service that provides direct access to the treasure trove of space exploration data.</p>
                    <img src={MarsRoverImg} alt="Mars Rover" />
                </AnimatedSection>
                <AnimatedSection className="sectionTwo">
                    <h1 className='sectionTwoTitle text-[1.5rem] pb-[4rem] md:text-[2rem]'>How it works</h1>
                    <p>Every day, NASA uploads photos taken by the Mars rovers to their public database. This website uses JavaScript and NASA's open API to fetch those images based on rover name, camera type, and Earth date or Martian sol (Mars day). When you browse this site, you're seeing real-time data pulled directly from NASA's servers!</p>
                </AnimatedSection>
                <AnimatedSection className="sectionThree">
                    <div className="paleBlueDotContainer">
                        <img src={paleBlueDot} alt="Pale Blue Dot" />
                        <p>The Pale Blue Dot is a photograph of Earth taken Feb. 14, 1990, by NASA's Voyager 1 at a distance of 3.7 billion miles (6 billion kilometers) from the Sun. The image inspired the title of scientist Carl Sagan's book, "Pale Blue Dot: A Vision of the Human Future in Space,"</p>
                    </div>
                    <div className="carlSaganQuote">
                        <div className="carlSaganQuoteText">
                            <p>"Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives."</p>
                            <p>~ Carl Sagan</p>
                        </div>
                        <div className="carlSaganImageContainer">
                            <img src={carlSagan} alt="Carl Sagan" />
                        </div>
                    </div>
                </AnimatedSection>
            </div>

        </div>
    )
}

export default Hero