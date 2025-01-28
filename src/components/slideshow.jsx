import { useState, useRef } from 'react';
import '../style/slideshow.scss';
function SlideShow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRollRef = useRef(null);

    const slides = [
        {
            image: "src/imgs/MovieZ.png",
            title: "Project MovieZ",
            description: "MovieZ er en film-database app til mobilen hvor du kan søge efter film, se trailers, ratings og beskrivelser. Bygget med React og TMDB API.",
            link: "https://projekt-moviez-silaswb.onrender.com/"
        },
        {
            image: "img",
            title: "Project Two",
            description: "Check out my second creation"
        },
        {
            image: "img",
            title: "Project Three",
            description: "The third project in my portfolio"
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
            <div className="container flex">
                <button className="prev" onClick={() => handleNavigation('prev')}>{'<'}</button>
                <div className="imagewindow">
                    <div className="imageroll flex" ref={imageRollRef}>
                        {slides.map((slide, index) => (
                            <div key={index} > 
                           
                                <div className="slide">
                           <img src={slide.image} alt={slide.title} />  
                                <div className="slide-content">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.description}</p>
                                </div>
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