// DebtStatusWidget.jsx

import { useState } from 'react';

function DebtStatusWidget() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <div className="max-w-lg p-4 bg-white rounded-lg shadow-xl">
      <h2 className="text-xl font-bold">Debt Status</h2>

      <div className="my-4 border-b border-gray-300"></div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-lg font-medium">Total Debt</p>
          <p className="text-2xl font-bold text-red-600">10,000 ₽</p>
        </div>
        <div>
          <p className="text-lg font-medium">Remaining Balance</p>
          <p className="text-2xl font-bold text-green-600">5,000 ₽</p>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="p-2 rounded-md bg-green-100">
            <p className="text-md font-medium">Category 1</p>
            <p className="text-xl font-bold text-green-700">1,000 ₽</p>
          </div>
          <div className="p-2 rounded-md bg-yellow-100">
            <p className="text-md font-medium">Category 2</p>
            <p className="text-xl font-bold text-yellow-700">2,000 ₽</p>
          </div>
          <div className="p-2 rounded-md bg-red-100">
            <p className="text-md font-medium">Category 3</p>
            <p className="text-xl font-bold text-red-700">3,000 ₽</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div
          className="text-md font-medium cursor-pointer select-none flex items-center"
          onClick={toggleNotifications}
        >
          Notifications
          <span className="ml-2">
            {isNotificationsOpen ? (
              <svg
                className="w-4 h-4 transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </span>
        </div>
        {isNotificationsOpen && (
          <ul className="list-disc list-inside mt-2">
            <li className="text-sm text-gray-600 mb-1">Notification 1</li>
            <li className="text-sm text-gray-600 mb-1">Notification 2</li>
            <li className="text-sm text-gray-600 mb-1">Notification 3</li>
          </ul>
        )}
      </div>

      <div className="flex justify-between items-center">
        <button className="px-4 py-2 mr-2 text-white font-medium bg-blue-500 hover:bg-blue-600 rounded-md">
          Action 1
        </button>
        <button className="px-4 py-2 text-white font-medium bg-blue-500 hover:bg-blue-600 rounded-md">
          Action 2
        </button>
      </div>
    </div>
  );
}

export default DebtStatusWidget;
