import IncomeTaxCalendar from './IncomeTaxCalendar';
import React from 'react';
import './index.css'; // Import Tailwind CSS here



const App = () => {
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.header}>Corporate Clients Portal</h1>
      <IncomeTaxCalendar />
    </div>
  );
};

const styles = {
  appContainer: {
    backgroundColor: '#1c1c1e',
    color: '#ffffff',
    textAlign: 'center',
    minHeight: '100vh',
    padding: '20px',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
};

export default App;
