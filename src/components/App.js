import { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

import PropTypes from 'prop-types';
import css from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const checkHideOrNot = good + neutral + bad;
  const total = good + neutral + bad;
  const percents = Math.round((good / total) * 100) + ' %';

  const updateFeedback = e => {
    switch (e.target.textContent) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  return (
    <div className={css.app}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={updateFeedback} />
      </Section>

      <Section title={'Statistics'}>
        {checkHideOrNot >= 1 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percents}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};

export default App;

App.propTypes = {
  bad: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  percents: PropTypes.number,
  message: PropTypes.string,
  title: PropTypes.string,
};
