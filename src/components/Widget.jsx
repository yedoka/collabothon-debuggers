import { useState } from 'react';
import commerzduck from "../assets/commerzduck.png";
import './Widget.css';  

const Widget = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Controls menu visibility
  const [isInputVisible, setIsInputVisible] = useState(false); // Controls input visibility
  const [hasInput, setHasInput] = useState(false); 
  const [inputValue, setInputValue] = useState(''); 
  const [isEditing, setIsEditing] = useState(false); 

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setHasInput(true);
      setIsInputVisible(false); // Hide input after submission
      setIsMenuVisible(false); // Hide menu after submitting the input
    }
  };

  const handleEditInput = () => {
    setIsEditing(true);
    setIsInputVisible(true); // Show input form for editing
  };

  const handleAccountantClick = () => {
    setIsMenuVisible(true); // Show the menu when "Accountant" is clicked
  };

  const handleOptionClick = (option) => {
    if (option === 'Overview') {
      setIsInputVisible(true); // Show the input form when "Overview" is clicked
      setIsMenuVisible(false); // Hide the menu
    } else {
      console.log(`Selected option: ${option}`);
    }
  };

  return (
    <div className={`widget ${isMenuVisible || isInputVisible ? 'expanded' : ''}`}>
      <div className={`mascot ${isMenuVisible ? 'small' : ''}`}>
        <img src={commerzduck} alt="commerzduck" />
        <button className='widget__button' onClick={handleAccountantClick}>Accountant</button>
      </div>

      {/* Show the menu with options after clicking "Accountant" */}
      {isMenuVisible && !hasInput && (
        <div>
          <ul className="widget__options">
            <li><a href="#" className='widget__option' onClick={() => handleOptionClick('Overview')}>Overview</a></li>
            <li><a href="#" className='widget__option' onClick={() => handleOptionClick('Forms and Fill')}>Forms and Fill</a></li>
            <li><a href="#" className='widget__option' onClick={() => handleOptionClick('Debt Check')}>Debt Check</a></li>
            <li><a href="#" className='widget__option' onClick={() => handleOptionClick('History')}>History</a></li>
          </ul>
          <button className='edit-input-btn' onClick={handleEditInput}>Edit Input</button>
        </div>
      )}

      {/* Show the input form when the Overview option is clicked */}
      {isInputVisible && (
        <form onSubmit={handleInputSubmit} className="input__form">
          <label htmlFor="inputField" className='input__form__label'>Please input the company's salary:</label>
          <input 
            id="inputField" 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            className='input__form__input'
            required
          />
          <button type="submit" className='input__form__button'>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Widget;