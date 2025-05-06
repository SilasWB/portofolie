import '../style/header.scss'

function Header() {
  return (
    <>
     <header>
      <nav className="navbar">
          <div className="logo">
              <h1>SBL</h1>
          </div>
          <ul className="nav-links">
              <li><a href="#">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>          
              </ul>
      </nav>
      <section>    
        <h1>HEJ, JEG ER <span>SILAS BARROS LARSEN</span> </h1>
      <p>Frontend-udvikler | Kreativ Problemlæser</p>

      <button>KONTAKT MIG</button>
      </section>
  
     </header>
    </>
  )
}
  
export default Header