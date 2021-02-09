import "./App.css";
import { Steps, Step } from "react-step-builder";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import FinalStep from "./Components/FinalStep";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <h3>Create your Demat account just in few click.</h3>
        <p>please fill all the details mention.</p>
        <Steps>
          <Step component={Step1} />
          <Step component={Step2} />
          <Step component={Step3} />
          <Step component={FinalStep} />
        </Steps>
      </div>
    </div>
  );
}

export default App;
