import { useState } from "react";
import {
  FaTimes,
  FaMoneyBillWave,
  FaHistory,
  FaChartBar,
  FaFileInvoice,
} from "react-icons/fa";
import commerzduck from "../assets/commerzduck.png";
import DebtStatusWidget from "./DebtStatusWidget";
import TaxHistoryWidget from "./TaxHistoryWidget";
import TaxOverview from "./TaxOverview"; // Correctly importing TaxOverview
import TaxFormsWidget from "./TaxFormsWidget";

const Widget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeWidget, setActiveWidget] = useState(null);

  const toggleWidget = (widget) => {
    setActiveWidget((prev) => (prev === widget ? null : widget));
  };

  const renderActiveWidget = () => {
    switch (activeWidget) {
      case "debt":
        return <DebtStatusWidget onClose={() => toggleWidget("debt")} />;
      case "history":
        return <TaxHistoryWidget onClose={() => toggleWidget("history")} />;
      case "overview":
        return <TaxOverview onClose={() => toggleWidget("overview")} />; // Ensure this opens TaxOverview
      case "forms":
        return <TaxFormsWidget onClose={() => toggleWidget("forms")} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <div
        className={`transition-all duration-300 ease-in-out flex flex-col items-center justify-center border bg-white rounded-lg shadow-lg w-72 ${
          isExpanded ? "h-72" : "h-48"
        }`}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={commerzduck}
            alt="commerzduck"
            className="w-24 transition-all duration-300 ease-in-out"
          />
          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="mt-3 font-poppins font-semibold text-white bg-orange-500 py-2 px-4 rounded-lg text-sm hover:bg-orange-600 transition-colors duration-300 ease-in-out"
              title="Open Accountant"
            >
              Accountant
            </button>
          )}
        </div>

        {isExpanded && (
          <div className="flex flex-col space-y-3 w-full p-4">
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-500 hover:text-red-500 transition-colors duration-300 ease-in-out"
              title="Close Menu"
            >
              <FaTimes size={18} />
            </button>

            <div className="grid grid-cols-2 gap-2 mt-4">
              {[
                { label: "Debt Status", icon: FaMoneyBillWave, widget: "debt" },
                { label: "Tax History", icon: FaHistory, widget: "history" },
                { label: "Tax Overview", icon: FaChartBar, widget: "overview" },
                { label: "Tax Forms", icon: FaFileInvoice, widget: "forms" },
              ].map(({ label, icon: Icon, widget }) => (
                <button
                  key={widget}
                  onClick={() => toggleWidget(widget)}
                  className={`bg-white hover:bg-gray-100 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md py-2 px-2 flex flex-col items-center rounded-lg text-xs border border-orange-500 ${
                    activeWidget === widget ? "bg-gray-200" : ""
                  }`}
                  title={label}
                >
                  <Icon size={20} className="text-orange-500 mb-1" />
                  <span className="text-xs font-medium text-gray-700">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-4 ml-4">
        {activeWidget && (
          <div key={activeWidget} className="w-72">
            {renderActiveWidget()} {/* Call the rendering function here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Widget;
