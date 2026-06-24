import { useState } from "react";

import ProductGrid from "./components/product/ProductGrid";
import ReviewPanel from "./components/ReviewPanel/ReviewPanel";
import StepAccordion from "./components/accordion/StepAccordion";

import "./App.css";

function App() {
  const [openStep, setOpenStep] = useState(1);

  return (
    <div className="bundle-page">

      <div className="bundle-container">

        {/* LEFT SIDE */}

        <div className="bundle-left">

          <StepAccordion
            step={1}
            title="Choose your cameras"
            isOpen={openStep === 1}
            onToggle={() =>
              setOpenStep(
                openStep === 1 ? null : 1
              )
            }
          >
            <ProductGrid />

            <div className="next-wrapper">
              <button
                className="next-btn"
                onClick={() =>
                  setOpenStep(2)
                }
              >
                Next: Choose your plan
              </button>
            </div>

          </StepAccordion>

          <StepAccordion
            step={2}
            title="Choose your plan"
            isOpen={openStep === 2}
            onToggle={() =>
              setOpenStep(
                openStep === 2 ? null : 2
              )
            }
          >
            <div className="dummy-content">
              Plans Coming Soon
            </div>
          </StepAccordion>

          <StepAccordion
            step={3}
            title="Choose your sensors"
            isOpen={openStep === 3}
            onToggle={() =>
              setOpenStep(
                openStep === 3 ? null : 3
              )
            }
          >
            <div className="dummy-content">
              Sensors Coming Soon
            </div>
          </StepAccordion>

          <StepAccordion
            step={4}
            title="Add extra protection"
            isOpen={openStep === 4}
            onToggle={() =>
              setOpenStep(
                openStep === 4 ? null : 4
              )
            }
          >
            <div className="dummy-content">
              Extra Protection Coming Soon
            </div>
          </StepAccordion>

        </div>

        {/* RIGHT SIDE */}

        <div className="bundle-right">
          <ReviewPanel />
        </div>

      </div>

    </div>
  );
}

export default App;