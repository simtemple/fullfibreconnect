const NavbarBrand=({logo})=>{
  
  return(
    <div className="navbar-brand">
      <a href="/" className="navbar-item">
          <img src={logo} alt="logo"/>
      </a>
    </div>
  )
}


const Nav=(props)=>{
  return(
    <nav className="navbar is-transparent">
      <div className="container">
          {props.children}
      </div>
    </nav>
  )
}

const Navbar =({logo})=>{
  
  return(
    <Nav>
      <NavbarBrand logo={logo}/>
    </Nav>
  )
}

export default Navbar;
