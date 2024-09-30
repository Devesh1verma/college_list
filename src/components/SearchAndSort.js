import React, { useState } from 'react';
import './SearchAndSort.css';

const SearchAndSort = ({ onSearch, onSort }) => {
  const [activeSort, setActiveSort] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  // Handle sort button click and toggle order
  const handleSort = (criteria) => {
    let newSortOrder = 'asc';
    if (activeSort === criteria && sortOrder === 'asc') {
      newSortOrder = 'desc';
    }
    setSortOrder(newSortOrder);
    setActiveSort(criteria);
    onSort(criteria, newSortOrder); // Pass sorting criteria and order to parent
  };

  return (
    <div className="search-sort">
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button
        className={activeSort === 'reviews' ? `active ${sortOrder}` : ''}
        onClick={() => handleSort('reviews')}
      >
        Sort by Reviews
      </button>
      <button
        className={activeSort === 'fees' ? `active ${sortOrder}` : ''}
        onClick={() => handleSort('fees')}
      >
        Sort by Fees
      </button>
      <button
        className={activeSort === 'placement' ? `active ${sortOrder}` : ''}
        onClick={() => handleSort('placement')}
      >
        Sort by Placement
      </button>
      <button
        className={activeSort === 'ranking' ? `active ${sortOrder}` : ''}
        onClick={() => handleSort('ranking')}
      >
        Sort by Ranking
      </button>
    </div>
  );
};

export default SearchAndSort;
