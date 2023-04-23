import React from 'react';
import { festivalCategory } from '../assets';

export function FestivalCategory({}) {
  return (
    <div className="festival-category">
      <div className="festival-category-heading u-position-relative">
        <div className="u-trapez-top"></div>
        <p className="festival-category-heading__heading">
          A კატეგორიის საგზურში შედის
        </p>
      </div>
      <div className="festival-category-includes-container">
        {festivalCategory.map(({ img, text }, index) => {
          return (
            <div
              key={index}
              className="festival-category-includes-container__includes"
            >
              <img
                src={img}
                alt={text}
                className="festival-category-includes-container__includes__img"
              />
              <p className="festival-category-includes-container__includes__text">
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
