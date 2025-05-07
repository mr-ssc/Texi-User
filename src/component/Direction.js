import React, { useState } from 'react';
import './Direction.css';

const Direction = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSearch = () => {
    if (!from || !to) {
      alert('Please enter both "From" and "To" locations');
      return;
    }
    
    // Open Google Maps with directions
    window.open(`https://www.google.com/maps/dir/${encodeURIComponent(from)}/${encodeURIComponent(to)}`);
    
    // Alternatively, you could use a maps API here
    console.log(`Searching directions from ${from} to ${to}`);
  };

  return (
    <div className="direction-container">
      <h2>Find Directions</h2>
      <div className="input-group">
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From..."
          className="direction-input"
        />
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To..."
          className="direction-input"
        />
      </div>
      <button onClick={handleSearch} className="search-btn">
        Get Directions
      </button>
    </div>
  );
};

export default Direction;