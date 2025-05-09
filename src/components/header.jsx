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
              <h1>Hej, jeg er <span>Silas Barros Larsen</span> </h1>
            <p>Frontend-udvikler | Kreativ Problemlæser</p>

            <button>Kontakt mig</button>      
            </section>
  
     </header>
    </>
  )
}
  
export default Header