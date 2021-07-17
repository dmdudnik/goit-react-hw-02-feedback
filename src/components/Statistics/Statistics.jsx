import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import styles from '../Statistics/Statistics.module.css'


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    if (total) {
        return (
        
            <div className={styles.statistics}>
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

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,

};

export default Statistics;



