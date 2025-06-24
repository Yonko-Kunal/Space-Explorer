import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-scroll'
import './Hero.css'
import CardsSection from '../CardsSection/CardsSection'
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
                    className="star"
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
        <div className="app">
            <div className="menu-icon">
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="universe-section">
                <div className="stars-container" style={{ opacity, transform: starsTransform }}>
                    <div className="stars small-stars">{smallStars}</div>
                    <div className="stars medium-stars">{mediumStars}</div>
                    <div className="stars large-stars">{largeStars}</div>
                </div>

                <div
                    className="main-content"
                    style={{
                        opacity: opacity,
                        // transform: textTransform,
                        '--blur-amount': blurAmount,
                        '--blur-translate-y': blurTranslateY
                    }}
                >
                    <h1 className="universe-title">THE UNIVERSE</h1>
                    <p className="universe-description">
                        The universe is a vast and mysterious place. It is home to billions of stars, planets, and galaxies.
                    </p>
                    <div className="universe-button-container">
                        <Link to="cards-section" smooth={true} duration={800}>
                            <button className="universeExploreBUtton">EXPLORE</button>
                        </Link>
                        <Link to="learn-more-section" smooth={true} duration={800}>
                            <button className="universeLearnMoreButton">LEARN MORE</button>
                        </Link>
                    </div>
                </div>
            </div>

            <AnimatedSection className="cards-section" id="cards-section">
                <CardsSection />
            </AnimatedSection>
            <div className="LearnMoreSection" id="learn-more-section">
                <AnimatedSection>
                    <h1 className='LearnMoreSectionTitle'> Learn More About This Project</h1>
                </AnimatedSection>
                <AnimatedSection className="sectionOne">
                    <p>This website brings you real images from the surface of Mars, captured by NASA's rovers — the Curiosity and Perseverance rovers. These stunning visuals are retrieved in real-time using NASA's Mars Rover Photos API, a publicly available service that provides direct access to the treasure trove of space exploration data.</p>
                    <img src={MarsRoverImg} alt="Mars Rover" />
                </AnimatedSection>
                <AnimatedSection className="sectionTwo">
                    <h1 className='sectionTwoTitle'>How it works</h1>
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