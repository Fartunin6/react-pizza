import React, { Fragment } from 'react';

import Categories from '../Categories';
import PizzaBlock from '../PizzaBlock';
import SortPopup from '../SortPopup';

const MainPage = ({ pizzas }) => {
  console.log(pizzas);
  return (
    <Fragment>
      <div className="content__top">
        <Categories items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Острые']} />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <ul className="content__items">
        {pizzas &&
          pizzas.map((obj) => {
            return <PizzaBlock key={obj.id} {...obj} />;
          })}
      </ul>
    </Fragment>
  );
};

export default MainPage;
