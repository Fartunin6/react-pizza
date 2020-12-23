import React, { Fragment, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../actions/filters';

import Categories from '../Categories';
import PizzaBlock from '../PizzaBlock';
import SortPopup from '../SortPopup';

import { categoryNames, sortItems } from '../../constants';

const MainPage = () => {
  const dispatch = useDispatch();
  const { pizzas, category } = useSelector(({ pizzas, filters }) => {
    return {
      pizzas: pizzas.items,
      category: filters.category,
    };
  });

  const onSelectItem = useCallback((idx) => {
    dispatch(setCategory(idx));
  }, []);

  const pizzasToBlock = (pizzas) => {
    return pizzas.map((obj) => {
      return <PizzaBlock key={obj.id} {...obj} />;
    });
  };

  return (
    <Fragment>
      <div className="content__top">
        <Categories items={categoryNames} category={category} setCategory={onSelectItem} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <ul className="content__items">
        {category !== null // with backend filters = useEfect(() => fetchPizzas, [ category ])
          ? pizzasToBlock(pizzas.filter((pizza) => pizza.category === category))
          : pizzasToBlock(pizzas)}
      </ul>
    </Fragment>
  );
};

export default MainPage;
