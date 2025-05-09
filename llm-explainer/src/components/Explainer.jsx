import { useState } from "react";
import ScrollSteps from "./ScrollSteps.jsx";
import Graphic from "./Graphic.jsx";

export default function Explainer() {
  const [step, setStep] = useState(0);

  const prose = [
    "Step 1: The input tokens are embedded.",
    "Step 2: The transformer attends to context.",
    "Step 3: Encodings are adjusted with position info.",
    "Step 4: The model predicts the next word."
  ];

  return (
    <div className="flex-container min-h-[400vh]">
      {/* LEFT: Scrollable text */}
      <div className="flex-child text-container">
        <ScrollSteps steps={prose} onStep={setStep} />
      </div>

      {/* RIGHT: Sticky graphic */}
      <div className="flex-child graphic-container">
        <Graphic activeStep={step} />
      </div>
    </div>
  );
}