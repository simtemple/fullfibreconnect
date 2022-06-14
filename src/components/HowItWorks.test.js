import { render, screen } from "@testing-library/react"
import HowItWorks, {EachStep} from "./HowItWorks";

describe("Testing HowItWorks component",()=>{
    

    test("Testing Steps number",()=>{
        render(<HowItWorks steps={[1,2,3,4,5]}/>)
        const StepsElement= screen.getAllByTestId("step");
        expect(StepsElement.length).toBe(5);
        
    })

    test("Testing each step component",()=>{
        const stepBody ={ step:1, content:"Stand here"}

        render(<EachStep step={stepBody.step} content={stepBody.content}/>)
        const elementRef = screen.getByTestId("step")
        expect(elementRef).toBeInTheDocument()
        expect(elementRef).toHaveTextContent("Stand here")
    })
})



