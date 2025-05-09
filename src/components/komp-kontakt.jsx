import '../style/kompkontakt.scss';

import { FiGithub } from "react-icons/fi";
import { RiLinkedinFill } from "react-icons/ri";

function KompKontakt() {


    return (
      <section className="kompkontakt">
    <article>
        <h2>KOMPETENCER / TECH STACK</h2>
    <ul>
        <li><p>Html</p></li>
        <li><p>Css</p></li>
        <li><p>Js</p></li>
        <li><p>React</p></li>
        <li><p>Vite</p></li>
        <li><p>Scss</p></li>
        <li><p>MySql</p></li>
        <li><p>MongoDB</p></li>
        <li><p>Php</p></li>
        <li><p>Wordpress</p></li>
        <li><p>NodeJs</p></li>
        <li><p>Webpack</p></li>    </ul>
    <div className='kompkontakt__social'>  
    <a href="https://www.linkedin.com/in/silas-barros-larsen/"><RiLinkedinFill /></a>
    <a href="https://github.com/SilasWB"><FiGithub /></a>
    </div>
  
    </article>
    <article>
        <h2>KONTAKT</h2>
        <p>Tlf: 42 20 20 79</p>
      <a href="mailto:silaslarsen80@gmail.com">Email: silaslarsen80@gmail.com</a>
    </article>

   
      </section>
    )
  }
  
  export default KompKontakt