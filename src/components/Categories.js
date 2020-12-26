import React, { memo } from 'react';

const Categories = memo(({ items, activeCategory, setCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => setCategory(null)}>
          Все
        </li>

        {items &&
          items.map((item, idx) => {
            return (
              <li
                key={idx}
                onClick={() => setCategory(idx)}
                className={idx === activeCategory ? 'active' : ''}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Categories;
