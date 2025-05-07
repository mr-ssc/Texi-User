import React, { useEffect } from 'react';
import './Direction.css';

const Direction = () => {
  useEffect(() => {
    // Any initialization logic can go here
  }, []);

  const handleSearch = () => {
    console.log('Search button clicked');
    // Add your search logic here
  };

  return (
    <div className="direction-container">
      <div className="center">
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Direction;