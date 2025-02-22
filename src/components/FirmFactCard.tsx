import React from 'react';
import styles from './styles//FirmFactCard.module.scss';
import Button from './Button';

interface FirmFactCardProps {
  variant: 'mainCard' | 'hover' | 'initial' | 'disabled';
  buttonText?: string;
  state?: string;
}

const FirmFactCard: React.FC<FirmFactCardProps> = ({ variant, buttonText, state }) => {
  const cardStyles = `${styles.card} ${variant === 'hover' ? styles.border : ''}`;

  return (
    <div className={cardStyles}>
      <Button variant="disabled">{buttonText}</Button>
      <p className={styles.stateText}>{state}</p>
    </div>
  );
};

export default FirmFactCard;