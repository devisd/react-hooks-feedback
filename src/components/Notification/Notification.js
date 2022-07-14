import React from 'react';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <li className={css.notification}>
      <p className={css.notification__text}>{message}</p>
    </li>
  );
};

export default Notification;
