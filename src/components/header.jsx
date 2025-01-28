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
     </header>
    </>
  )
}
  
export default Header