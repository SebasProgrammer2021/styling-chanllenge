import React from 'react';
import styles from './styles/Button.module.scss';

interface ButtonProps {
  variant: 'default' | 'icon';
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, disabled = false, children }) => {
  const buttonStyles = `${styles.button} ${variant === 'icon' ? styles.icon : ''} ${disabled ? styles.disabled : ''}`;

  return (
    <button className={buttonStyles} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;