import {Helmet} from "react-helmet";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import LeafletMap from "../components/LeafletMap";
import Footer from "../components/Footer";
import appData from "../api/app.json"
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
      <Helmet>
        <title>MTN Fibre Checker</title>
      </Helmet>  
      <Hero
        logo={logo}
        title={appData.about.title}
        subtitle={appData.about.description} />
      <HowItWorks  steps={appData.steps}/>
      <LeafletMap />
      <Footer />
    </Landing>
  )

}
export default LandingPage;
