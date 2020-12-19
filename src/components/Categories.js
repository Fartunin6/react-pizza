import React, { useState } from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((item, idx) => {
            return (
              <li
                key={idx}
                onClick={() => setActiveItem(idx)}
                className={idx === activeItem ? 'active' : ''}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Categories;
