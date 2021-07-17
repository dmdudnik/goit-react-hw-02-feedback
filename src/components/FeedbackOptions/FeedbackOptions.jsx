import React from 'react';
import styles from '../FeedbackOptions/FeedbackOptions.module.css';


const FeedbackOptions = ({ goodIncrement, neutralIncrement, badIncrement }) => {

    return (
      <div className={styles.feedbackopt}>
        <button type='button' className={styles.button} onClick={goodIncrement}>Good</button>
        <button type='button' className={styles.button} onClick={neutralIncrement}>Neutral</button>
        <button type='button' className={styles.button} onClick={badIncrement}>Bad</button>
      </div>
    )
    
}

export default FeedbackOptions;