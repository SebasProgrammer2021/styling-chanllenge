import React from 'react';
import styles from './styles/Button.module.scss';
import magnifyingGlass from './assets/magnifying-glass.svg';

interface ButtonProps {
  variant: 'default' | "icon";
  disabled?: boolean;
  icon?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, disabled, icon = false, children }) => {

  return (
    <button className={`${styles[variant]}  ${!icon && styles.noicon}`} disabled={disabled}>
      {icon && <img className={styles.iconMagnifyingGlass} src={magnifyingGlass} alt="magnifying glass" width={22} height={22} />}
      <p>
        {children}
      </p>
    </button>
  );
};

export default Button;