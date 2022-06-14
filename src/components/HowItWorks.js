
export const EachStep=({step,content})=>{
  return(
    <div data-testid="step" className="column">
     <div className="box content">
      <h3>Step: {step}</h3>
      <p>{content}</p>
     </div>
    </div>
  )
}
export const ListSteps =({list})=>{
  const AllSteps =
  list.map((content,index)=>(<EachStep  key={index} step={index + 1}  content={content}/>));

  return(
    <div className="columns">
        {AllSteps}
    </div>
  );
}

export const Heading=({title,size=""})=>(<p className={"title " + size}>{title}</p>)

const HowItWorks=({steps})=>{
  return(
    <section style={{backgroundColor: "#f9f4f4"}} className="p-4 has-text-centered">
      <Heading size="is-3" title="how it works" />
      <ListSteps list={steps} />
    </section>
  )
}

export default HowItWorks;
