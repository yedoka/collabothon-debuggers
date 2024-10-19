import { useState } from 'react';
import commerzduck from "../assets/commerzduck.png";

const Widget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasInput, setHasInput] = useState(false);
  const [inputValue, setInputValue] = useState(''); 
  const [isEditing, setIsEditing] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = () => {
    setIsExpanded(true);
    if (!hasInput || isEditing) {
      console.log('Input required or editing input');
    } else {
      console.log('Skip input, go directly to menu');
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const parsedValue = parseInt(inputValue, 10);

    if (isNaN(parsedValue) || parsedValue < 0) {
      setErrorMessage('Please enter a valid positive integer.');
    } else {
      setHasInput(true); 
      setIsEditing(false);  
      setIsExpanded(true);  
      setErrorMessage('');  
    }
  };

  const handleEditInput = () => {
    setIsEditing(true);  
    setIsExpanded(true); 
  };

  return (
    <div className={`transition-all duration-700 ease-out flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg ${isExpanded ? 'w-96 h-96 p-4' : 'w-64 h-64 p-5'} mt-24 ml-24`}>
      <div className="flex flex-col items-center">
        <img src={commerzduck} alt="commerzduck" className={`transition-all ${isExpanded ? 'w-36' : 'w-40'}`} />
        <button className={`mt-5 font-poppins font-bold text-white bg-primary py-2 px-6 rounded-xl relative z-10 hover:scale-110 transition-transform duration-300 ${isExpanded ? 'hidden' : ''}`} onClick={handleClick}>
          Accountant
        </button>

        {(!hasInput || isEditing) && isExpanded && (
          <form onSubmit={handleInputSubmit} className="flex flex-col items-center gap-3 mt-4">
            <label htmlFor="inputField" className="font-poppins">Please input the companies salary:</label>
            <input 
              id="inputField" 
              type="number" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
              min="0"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary w-full"
            />
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            <button type="submit" className="mt-2 bg-primary text-white py-2 px-5 rounded-xl font-poppins font-bold hover:scale-110 transition-transform">
              Submit
            </button>
          </form>
        )}

        {hasInput && !isEditing && isExpanded && (
          <div className="flex flex-col items-center mt-4">
            <ul className="space-y-3 font-poppins text-lg font-bold">
              <li><a href="#" className="text-black hover:text-gray-500 transition-colors">Overview</a></li>
              <li><a href="#" className="text-black hover:text-gray-500 transition-colors">Forms and Fill</a></li>
              <li><a href="#" className="text-black hover:text-gray-500 transition-colors">Debt Check</a></li>
              <li><a href="#" className="text-black hover:text-gray-500 transition-colors">History</a></li>
            </ul>
            <div className="mt-3 text-center font-poppins">
              <p>On a salary of <span className="text-primary cursor-pointer" onClick={handleEditInput}>{inputValue}€ Back</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Widget;
