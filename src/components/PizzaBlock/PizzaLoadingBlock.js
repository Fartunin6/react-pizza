import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaLoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="132" cy="142" r="115" />
      <rect x="0" y="269" rx="0" ry="0" width="280" height="26" />
      <rect x="0" y="307" rx="3" ry="3" width="280" height="84" />
      <rect x="0" y="417" rx="3" ry="3" width="91" height="31" />
      <rect x="137" y="408" rx="20" ry="20" width="140" height="43" />
    </ContentLoader>
  );
};

export default PizzaLoadingBlock;
