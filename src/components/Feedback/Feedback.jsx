import React from 'react';
import { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import styles from '../Feedback/Feedback.module.css';



class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  
  goodIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  badIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => 
     Object.values(this.state).reduce((a, b) => a + b);

  countPositiveFeedbackPercentage = () => Math.round(this.state.good * 100 / this.countTotalFeedback());

  
  render() {
    
    return (
      <>
      <div className={styles.feedback}>
        <h1>Please leave feedback</h1>
          
        <FeedbackOptions
          goodIncrement={this.goodIncrement}
          neutralIncrement={this.neutralIncrement}
          badIncrement={this.badIncrement}
        />
        <Section title= "Statistics">
        <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
        </div>
        </>
    );
  }
}

export default Feedback;



