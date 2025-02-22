import React from 'react';
import styles from './styles//FirmFactCard.module.scss';
import Button from './Button';

interface FirmFactCardProps {
  variant: 'default' | 'border';
}

const FirmFactCard: React.FC<FirmFactCardProps> = ({ variant }) => {
  const cardStyles = `${styles.card} ${variant === 'border' ? styles.border : ''}`;

  return (
    <div className={cardStyles}>
      <div className={styles.content}>
        <h2>Firm Fact Title</h2>
        <p>Description of the firm fact. This is a longer description to demonstrate the text wrapping and truncation.</p>
      </div>
      <Button variant="default">Learn More</Button>
    </div>
  );
};

export default FirmFactCard;