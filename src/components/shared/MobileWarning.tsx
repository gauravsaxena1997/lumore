import React from 'react';
import styles from './MobileWarning.module.css';

const MobileWarning: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <h2 className={styles.title}>Desktop Only Experience</h2>
        <p className={styles.message}>
          This case study is currently optimized for desktop viewing.
          Please open this page on a larger screen to explore the full experience.
        </p>
      </div>
    </div>
  );
};

export default MobileWarning;
