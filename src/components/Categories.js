import React, { memo } from 'react';

const Categories = memo(({ items, category, setCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li className={category === null ? 'active' : ''} onClick={() => setCategory(null)}>
          Все
        </li>

        {items &&
          items.map((item, idx) => {
            return (
              <li
                key={idx}
                onClick={() => setCategory(idx)}
                className={idx === category ? 'active' : ''}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Categories;
