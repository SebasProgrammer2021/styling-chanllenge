import React from 'react';
import styles from './styles//FirmFactCard.module.scss';
import Button from './Button';
import magnifyingGlass from './assets/magnifying-glass.svg';

interface FirmFactCardProps {
  variant: 'mainCard' | 'hover' | 'initial' | 'disabled' | 'green';
  buttonText?: string;
  state?: string;
  icon?: boolean;
}

const FirmFactCard: React.FC<FirmFactCardProps> = ({ variant, buttonText, state, icon }) => {
  const cardStyles = `${styles.card} ${styles[variant]}`;

  return (
    <div className={cardStyles}>
      <Button variant="disabled">
        {icon && <img className={styles.icon} src={magnifyingGlass} alt="magnifying glass" width={100} height={100} />}
        <p className={styles.buttonText}>
          {buttonText}
        </p>
      </Button>
      <p className={styles.stateText}>{state}</p>
    </div>
  );
};

export default FirmFactCard;