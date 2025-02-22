import React from 'react';
import styles from './styles/Button.module.scss';

interface ButtonProps {
  variant: 'mainCard' | 'hover' | 'initial' | 'disabled' | 'icon';
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, disabled = false, children }) => {
  const buttonStyles = `${styles.button} ${variant === 'icon' ? styles.icon : ''} ${disabled ? styles.disabled : ''}`;

  return (
    <button className={buttonStyles} disabled={disabled}>
      <p className={styles.buttonText}>
        {children}
      </p>
    </button>
  );
};

export default Button;