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
import TaxOverview from "./TaxOverview";
import TaxFormsWidget from "./TaxFormsWidget";

const Widget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeWidget, setActiveWidget] = useState(null); // Changed to store a single widget

  const toggleWidget = (widget) => {
    // If the same widget is clicked again, close it; otherwise, open the new one
    setActiveWidget((prev) => (prev === widget ? null : widget));
  };

  const renderActiveWidget = (widget) => {
    switch (widget) {
      case "debt":
        return <DebtStatusWidget onClose={() => toggleWidget("debt")} />;
      case "history":
        return <TaxHistoryWidget onClose={() => toggleWidget("history")} />;
      case "overview":
        return <TaxOverview onClose={() => toggleWidget("overview")} />;
      case "forms":
        return <TaxFormsWidget onClose={() => toggleWidget("forms")} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      {/* Основной виджет слева */}
      <div
        className={`transition-all duration-300 ease-in-out flex flex-col items-center justify-center border bg-white rounded-lg shadow-lg w-72 ${
          isExpanded ? "h-72" : "h-48"
        }`}
      >
        {/* Логотип и кнопка Accountant */}
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
            >
              Accountant
            </button>
          )}
        </div>

        {/* Кнопки для переключения виджетов с иконками */}
        {isExpanded && (
          <div className="flex flex-col space-y-3 w-full p-4">
            {/* Иконка для закрытия меню (слева сверху) */}
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-500 hover:text-red-500 transition-colors duration-300 ease-in-out"
            >
              <FaTimes size={18} />
            </button>

            {/* Кнопки для выбора виджетов */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <button
                onClick={() => toggleWidget("debt")}
                className={`bg-white hover:bg-gray-100 transition-transform duration-300 ease-in-out shadow-md py-2 px-2 flex flex-col items-center rounded-lg text-xs border border-orange-500 ${
                  activeWidget === "debt" ? "bg-gray-200" : ""
                }`}
              >
                <FaMoneyBillWave size={20} className="text-orange-500 mb-1" />
                <span className="text-xs font-medium text-gray-700">
                  Debt Status
                </span>
              </button>
              <button
                onClick={() => toggleWidget("history")}
                className={`bg-white hover:bg-gray-100 transition-transform duration-300 ease-in-out shadow-md py-2 px-2 flex flex-col items-center rounded-lg text-xs border border-orange-500 ${
                  activeWidget === "history" ? "bg-gray-200" : ""
                }`}
              >
                <FaHistory size={20} className="text-orange-500 mb-1" />
                <span className="text-xs font-medium text-gray-700">
                  Tax History
                </span>
              </button>
              <button
                onClick={() => toggleWidget("overview")}
                className={`bg-white hover:bg-gray-100 transition-transform duration-300 ease-in-out shadow-md py-2 px-2 flex flex-col items-center rounded-lg text-xs border border-orange-500 ${
                  activeWidget === "overview" ? "bg-gray-200" : ""
                }`}
              >
                <FaChartBar size={20} className="text-orange-500 mb-1" />
                <span className="text-xs font-medium text-gray-700">
                  Tax Overview
                </span>
              </button>
              <button
                onClick={() => toggleWidget("forms")}
                className={`bg-white hover:bg-gray-100 transition-transform duration-300 ease-in-out shadow-md py-2 px-2 flex flex-col items-center rounded-lg text-xs border border-orange-500 ${
                  activeWidget === "forms" ? "bg-gray-200" : ""
                }`}
              >
                <FaFileInvoice size={20} className="text-orange-500 mb-1" />
                <span className="text-xs font-medium text-gray-700">
                  Tax Forms
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Контейнер для активного виджета справа */}
      <div className="flex flex-wrap gap-4 ml-4">
        {activeWidget && (
          <div key={activeWidget} className="w-72">
            {renderActiveWidget(activeWidget)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Widget;
