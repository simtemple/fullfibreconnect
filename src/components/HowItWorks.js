
const steps =[
  "Enter your GhanaPostGPS Address or click the GPS icon to use your current location",
  "Find your pinned location on map. The yellow highlighted areas is where there is MTN fibre",
  "Read the indication on the pinned location. Available means you can be connected "]
const EachStep=({step,content})=>{
  return(
    <div className="column">
     <div className="box content">
      <h3>Step: {step}</h3>
      <p>{content}</p>
     </div>
    </div>
  )
}
const ListSteps =()=>{
  const AllSteps =
  steps.map((content,index)=>(<EachStep key={index} step={index + 1}  content={content}/>));

  return(
    <div className="columns">
        {AllSteps}
    </div>
  );
}

export const Heading=({title,size=""})=>(<p className={"title " + size}>{title}</p>)

const HowItWorks=(props)=>{
  return(
    <section style={{backgroundColor: "#f9f4f4"}} className="p-4 has-text-centered">
      <Heading size="is-3" title="how it works" />
      <ListSteps />
    </section>
  )
}

export default HowItWorks;
