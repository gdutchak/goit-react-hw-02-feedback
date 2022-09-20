import { Component } from "react";
import { Statistics } from "./Components/Statistics/Statistics";
import { FeedbackOptions } from "./Components/FeedbackOptions/FeedbackOptions";
import { Section } from "./Components/Section/Section";
import { Notification } from "./Components/Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addFeedback = e => {
    const { name } = e.currentTarget;
    this.setState(prevState => {
      return { [name]: prevState[name] += 1 };
    })
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (good > 0) {
      const sum = (good * 100) / this.countTotalFeedback();
      return sum.toFixed(0);
    }
    return 0
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div style={{ padding: 40 }}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.addFeedback}></FeedbackOptions>
        </Section>
        <Section title='Statistics'>
          {this.countTotalFeedback() !== 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics> : <Notification message='No feedback given'></Notification>}
        </Section>
      </div>
    )
  }
};