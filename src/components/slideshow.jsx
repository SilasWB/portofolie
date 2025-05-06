import { useState, useRef } from 'react';
import '../style/slideshow.scss';
import MovieZ from '../imgs/MovieZ.png';
import Hifi from '../imgs/hifi.png';
import Newsify from '../imgs/Newsify.png';
import orange from '../imgs/orange.png';

function SlideShow() {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRollRef = useRef(null);

    const slides = [
        {
            image: MovieZ,
            title: "Project MovieZ",
            description: "MovieZ er en film-database app til mobilen hvor du kan søge efter film, se trailers, ratings og beskrivelser. Bygget med React og TMDB API.",
            link: "https://projekt-moviez-silaswb.onrender.com/"
        },
        {
            image: Hifi,
            title: "Project Hifi",
            description: "musikshop der sælger hifi-produkter. Bygget med HTML, CSS og JavaScript.",
        },
        {
            image: Newsify,
            title: "Project Newsify",
            description: "Newsify er en app til at finde musik, der passer til din musik smag. Bygget med React og Spotify API."
        },
        {
            image: orange,
            title: "Project ",
            description: "MovieZ er en film-database app til mobilen hvor du kan søge efter film, se trailers, ratings og beskrivelser. Bygget med React og TMDB API.",
            link: "https://projekt-moviez-silaswb.onrender.com/"
        }
    ];

    const handleNavigation = (direction) => {
        let newIndex = currentIndex;
        if (direction === 'prev' && newIndex > 0) {
            newIndex--;
        } else if (direction === 'next' && newIndex < slides.length - 1) {
            newIndex++;
        }
        updateSlide(newIndex);
    };

    const updateSlide = (newIndex) => {
        const offset = newIndex * 400;
        if (imageRollRef.current) {
            imageRollRef.current.style.transform = `translateX(-${offset}px)`;
            imageRollRef.current.style.transition = 'transform 0.5s';
            setCurrentIndex(newIndex);
        }
    };

    return (
        <section className="slideshow">
            <div className="slide-content">
                <h2>{slides[currentIndex].title}</h2>
                <p>{slides[currentIndex].description}</p>
            </div>
            <div className="container flex">
                <button className="prev" onClick={() => handleNavigation('prev')}>{'<'}</button>
                <div className="imagewindow">
                    <div className="imageroll flex" ref={imageRollRef}>
                        {slides.map((slide, index) => (
                            <div key={index} > 
                                <div className="slide">
                                    <img src={slide.image} alt={slide.title} />  
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="next" onClick={() => handleNavigation('next')}>{'>'}</button>
            </div>
            <div className="dots">
                {slides.map((_, index) => (
                    <div 
                        key={index}
                        className={`dot ${currentIndex === index ? 'fill' : ''}`}
                        onClick={() => updateSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
}

export default SlideShow;