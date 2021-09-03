import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import LeafletMap from "../components/LeafletMap";
import Footer from "../components/Footer";
import logo from "../img/logo.png";




function Landing(props) {
  return (
    <div className="">
        { props.children }
    </div>
  );
}
const LandingPage=()=>{

  return(
    <Landing>
      <Hero
        logo={logo}
        title={"Fibre Broadband Checker"}
        subtitle={"A simple and easy way to check MTN fibre availability in or out of your area."} />
      <HowItWorks />
      <LeafletMap />
      <Footer />
    </Landing>
  )

}
export default LandingPage;
