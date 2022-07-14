import { Component } from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percents: 0,
    message: 'There is no feedback',
  };

  static propTypes = {
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percents: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  updateStatistic = e => {
    const value = e.target.textContent;
    return this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    this.total = good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    this.percents = Math.round((good / this.total) * 100) + ' %';
  }

  render() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();

    const { good, neutral, bad } = this.state;
    const checkHideOrNot = good + neutral + bad;

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateStatistic}
          />
        </Section>

        <Section title={'Statistics'}>
          {checkHideOrNot >= 1 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.total}
              positivePercentage={this.percents}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
