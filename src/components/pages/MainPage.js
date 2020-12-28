import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../../actions/filters';
import { fetchPizzas } from '../../actions/pizzas';
import { addPizzaToCart } from '../../actions/cart';

import Categories from '../Categories';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import PizzaLoadingBlock from '../PizzaBlock/PizzaLoadingBlock';
import SortPopup from '../SortPopup';

import { categoryNames, sortItems } from '../../constants';

const MainPage = () => {
  const dispatch = useDispatch();

  const { pizzas, cartPizzas, category, loading, sortBy } = useSelector(
    ({ pizzas, filters, cart }) => {
      return {
        pizzas: pizzas.items,
        cartPizzas: cart.items,
        loading: pizzas.loading,
        category: filters.category,
        sortBy: filters.sortBy,
      };
    },
  );

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((idx) => {
    dispatch(setCategory(idx));
  }, []);

  const onSelectSortBy = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const onAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
          activeCategory={category}
          setCategory={onSelectCategory}
        />

        <SortPopup items={sortItems} activeSortType={sortBy.type} setSortBy={onSelectSortBy} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <ul className="content__items">
        {loading
          ? Array(10)
              .fill(0)
              .map((el, idx) => <PizzaLoadingBlock key={idx} />)
          : pizzas.map((obj) => (
              <PizzaBlock
                key={obj.id}
                addedCount={cartPizzas[obj.id] && cartPizzas[obj.id].length}
                onAddPizza={onAddPizza}
                {...obj}
              />
            ))}
      </ul>
    </div>
  );
};

export default MainPage;
