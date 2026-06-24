import StepAccordion from "../components/accordion/StepAccordion.jsx";
import ProductGrid from "../components/product/ProductGrid.jsx";

function BundleBuilder() {
  return (
    <div className="container-fluid py-4">
      <div className="row g-4">

        {/* LEFT */}
        <div className="col-lg-8">

         <StepAccordion
  stepNumber={1}
  title="Choose your cameras"
  selectedCount={0}
  defaultOpen={true}
>
  <ProductGrid />
</StepAccordion>

          <StepAccordion
            stepNumber={2}
            title="Choose your plan"
            selectedCount={0}
          >
            <div>Plans</div>
          </StepAccordion>

          <StepAccordion
            stepNumber={3}
            title="Choose your sensors"
            selectedCount={1}
          >
            <div>Sensors</div>
          </StepAccordion>

          <StepAccordion
            stepNumber={4}
            title="Add extra protection"
            selectedCount={0}
          >
            <div>Protection</div>
          </StepAccordion>

        </div>

        {/* RIGHT */}
        <div className="col-lg-4">
          <div className="p-3 bg-white border rounded sticky-top">
            Summary
          </div>
        </div>

      </div>
    </div>
  );
}

export default BundleBuilder;