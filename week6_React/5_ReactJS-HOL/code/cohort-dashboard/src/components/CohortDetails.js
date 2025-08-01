import React from 'react';
import styles from '../CohortDetails.module.css';

const CohortDetails = ({ name, startDate, status, coach, trainer }) => {
  // Title color based on status
  const titleStyle = {
    color: status === 'Ongoing' ? 'green' : (status === 'Scheduled' ? 'blue' : 'black')
  };

  return (
    <div className={styles.box}>
      <h3 className={styles.title} style={titleStyle}>{name}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{startDate}</dd>

        <dt>Current Status</dt>
        <dd>{status}</dd>

        <dt>Coach</dt>
        <dd>{coach}</dd>

        <dt>Trainer</dt>
        <dd>{trainer}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
