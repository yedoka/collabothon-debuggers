import { useState } from 'react';
import commerzduck from "../assets/commerzduck.png";
import './Widget.css';  

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
    <div className={`widget ${isExpanded ? 'expanded' : ''}`}>
      <div className={`mascot ${isExpanded ? 'small' : ''}`}>
        <img src={commerzduck} alt="commerzduck" />
        <button className='widget__button' onClick={handleClick}>Accountant</button>
      </div>

      {(!hasInput || isEditing) && isExpanded && (
        <form onSubmit={handleInputSubmit} className="input__form">
          <label htmlFor="inputField" className='input__form__label'>Please input the companies salary:</label>
          <input 
            id="inputField" 
            type="number" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            min="0"
            className='input__form__input'
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className='input__form__button'>Submit</button>
        </form>
      )}

      {hasInput && !isEditing && isExpanded && (
        <div>
          <ul className="widget__options">
            <li><a href="#" className='widget__option'>Overview</a></li>
            <li><a href="#" className='widget__option'>Forms and Fill</a></li>
            <li><a href="#" className='widget__option'>Debt Check</a></li>
            <li><a href="#" className='widget__option'>History</a></li>
          </ul>
          <button className='edit-input-btn' onClick={handleEditInput}>Edit Input</button>
        </div>
      )}
    </div>
  );
};

export default Widget;
