import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import styles from '../Statistic/Statistic.module.css';


const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    if (total) {
        return (
            <div className={styles.statistic}>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad} </p>
                <p>Total: {total} </p>
                <p>Positive feedback: {positivePercentage}% </p>
            </div>
        );
   }

    else {
        return (
            < Notification
                message={'No feedback given'}
        />
    );
    
    };
    
};

Statistic.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,

};

export default Statistic;



