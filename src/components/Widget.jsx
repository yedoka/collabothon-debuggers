import { useState } from 'react';
import commerzduck from "../assets/commerzduck.png";
import './Widget.css';  

const Widget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(true);
  };

  return (
    <div className={`widget ${isExpanded ? 'expanded' : ''}`}>
      <div className={`mascot ${isExpanded ? 'small' : ''}`}>
        <img src={commerzduck} alt="commerzduck" />
        <button className={`widget__button ${isExpanded ? 'hidden' : ''}`} onClick={handleClick}>Accountant</button>

        {isExpanded && (
          <div>
            <ul className="widget__options">
              <li><a href="#" className='widget__option'>Overview</a></li>
              <li><a href="#" className='widget__option'>Forms and Fill</a></li>
              <li><a href="#" className='widget__option'>Debt Check</a></li>
              <li><a href="#" className='widget__option'>History</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Widget;
