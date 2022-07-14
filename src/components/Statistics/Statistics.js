import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const props = { good, neutral, bad, total };
  const keys = Object.keys(props);
  const values = Object.values(props);
  const component = keys.map((el, i) => {
    return (
      <li className={css.statistics__item} key={i}>
        <p className={css.statistics__text}>
          {el}: {values[i]}
        </p>
      </li>
    );
  });

  return (
    <ul className={css.statistics__list}>
      {component}
      <li className={css.statistics__item}>
        <p className={css.statistics__text}>
          Positive feedback: {positivePercentage}
        </p>
      </li>
    </ul>
  );
};

export default Statistics;
