import '../style/projekter.scss'
import MovieZ from '../imgs/MovieZ.png';
import Hifi from '../imgs/hifi.png';
import Newsify from '../imgs/Newsify.png';
import Orange from '../imgs/orange.png';

function Projects() {
  return (
    <>  
    
    <h2>Mine Seneste Projekter</h2>
   
    <section className="projects">
        <a href="https://projekt-moviez-silaswb.onrender.com"> 
        <div className="projects__item">
            <img className="projects__image" src={MovieZ} alt="MovieZ" />
            <p className="projects__name">MovieZ<span className="projects__icon">ReactIcon</span></p>
        </div>
        </a>
       <a href="https://playful-cheesecake-5812cf.netlify.app"> 
       <div className="projects__item">
            <img className="projects__image" src={Hifi} alt="Hifi" />
            <p className="projects__name">Hifi<span className="projects__icon">ReactIcon</span></p>
        </div>
        </a>
       <a href="https://gleaming-sfogliatella-89b989.netlify.app/"> <div className="projects__item">
            <img className="projects__image" src={Newsify} alt="Newsify" />
            <p className="projects__name">Newsify<span className="projects__icon">ReactIcon</span></p>
        </div>
        </a>
       
<a href="https://venerable-banoffee-c31bbe.netlify.app/">
       <div className="projects__item">
            <img className="projects__image" src={Orange} alt="Orange" />
            <p className="projects__name">Orange<span className="projects__icon">ReactIcon</span></p>
        </div>
</a>
     

    </section> 
    </> )
}
  
export default Projects