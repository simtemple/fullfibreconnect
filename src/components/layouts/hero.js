import Navbar from "./navbar";

const HeroHead =({logo})=>{
  return (
    <div className="hero-head">
      <Navbar logo={logo} />
    </div>
  )
}

const HeroBody =({title,subtitle})=>{
  return(
    <div className="hero-body">
      <div className="container">
        <p className="title is-3">{title}</p>
        <p className="subtitle is-5">{subtitle}</p>
        <p className="block">
        <a href="#map" className="button is-link is-rounded ">Check Fibre Availability</a>
        </p>

      </div>
    </div>
  )
}

const HeroSection=(props)=>{
  return(
    <div className="hero">
      {props.children}
    </div>
  )
}

const Hero=({logo,title,subtitle})=>{
  return(
      <HeroSection>
        <HeroHead logo={logo} />
        <HeroBody title={title} subtitle={subtitle} />
      </HeroSection>
  )
}

export default Hero;
