import { useState } from "react";
const NavbarBrand=({logo,setStatus})=>{
  const onclick=(e)=>{
     setStatus((status)=>(!status));
     e.preventDefault();
  }
  return(
    <div className="navbar-brand">
      <a className="navbar-item">
          <img src={logo} alt="logo"/>
      </a>

    </div>
  )
}
const NavbarMenu=({active})=>{
  const isactive = active ? " is-active" : "";
  return(
    <div className={"navbar-menu" + isactive} >
      <div className="navbar-end">
        <a className="navbar-item">Home</a>
        <a className="navbar-item">How it works</a>
      </div>
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
  const [status, setStatus] = useState(false);
  return(
    <Nav>
      <NavbarBrand setStatus={setStatus} logo={logo}/>
    </Nav>
  )
}

export default Navbar;
