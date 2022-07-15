import { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

import PropTypes from 'prop-types';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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

  // static defaultProps = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  //   total: 0,
  //   percents: 0,
  //   message: 'There is no feedback',
  // };

  // static propTypes = {
  //   bad: PropTypes.number.isRequired,
  //   good: PropTypes.number.isRequired,
  //   neutral: PropTypes.number.isRequired,
  //   total: PropTypes.number.isRequired,
  //   percents: PropTypes.number.isRequired,
  //   message: PropTypes.string.isRequired,
  //   title: PropTypes.string,
  // };

  // state = {
  //   good: this.props.good,
  //   neutral: this.props.neutral,
  //   bad: this.props.bad,
  // };

  // const updateStatistic = e => {
  //   const value = e.target.textContent;
  //   return this.setState(prevState => {
  //     return {
  //       [value]: prevState[value] + 1,
  //     };
  //   });
  // };

  // function countTotalFeedback() {
  //   const { good, neutral, bad } = this.state;
  //   this.total = good + neutral + bad;
  // }

  // function countPositiveFeedbackPercentage() {
  //   const { good } = this.state;
  //   this.percents = Math.round((good / this.total) * 100) + ' %';
  // }

  // this.countTotalFeedback();
  // this.countPositiveFeedbackPercentage();

  // const { good, neutral, bad } = this.state;

  const checkHideOrNot = good + neutral + bad;
  const total = good + neutral + bad;
  const percents = Math.round((good / total) * 100) + ' %';

  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: 120,
      }}
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          // options={this.state}
          onLeaveFeedback={updateFeedback}
        />
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
