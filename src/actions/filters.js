export const setSortBy = (sortName) => {
  return {
    type: 'SET_SORT_BY',
    payload: sortName,
  };
};

export const setCategory = (catIndex) => {
  return {
    type: 'SET_CATEGORY',
    payload: catIndex,
  };
};
