import { TbDeviceCctv } from "react-icons/tb";
import { FaShieldHeart } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";

import { useBundle } from "../../context/BundleContext";

import "./StepAccordion.css";

function StepAccordion({
  step,
  title,
  children,
  isOpen,
  onToggle,
}) {
  const { selectedCount } = useBundle();

  const getIcon = () => {
    switch (step) {
      case 1:
        return <TbDeviceCctv />;

      case 2:
        return <FaShieldHeart />;

      case 3:
        return <TbDeviceCctv />;

      case 4:
        return <MdSecurity />;

      default:
        return <TbDeviceCctv />;
    }
  };

  return (
    <div
      className={`step-wrapper ${
        isOpen ? "active-step" : ""
      }`}
    >
      <div
        className="step-header"
        onClick={onToggle}
      >
        <div className="step-top">
          STEP {step} OF 4
        </div>

        <div className="step-main">
          <div className="step-left">
            <div className="step-icon">
              {getIcon()}
            </div>

            <h3>{title}</h3>
          </div>

          <div className="step-right">
            {step === 1 && (
              <span className="selected-count">
                {selectedCount} selected
              </span>
            )}

            <IoChevronDown
              className={`arrow ${
                isOpen ? "rotate" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="step-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default StepAccordion;