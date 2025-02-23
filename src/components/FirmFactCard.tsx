import React from 'react';
import styles from './styles//FirmFactCard.module.scss';
import Button from './Button';

interface FirmFactCardProps {
  variant: "default" | "border";
  large?: boolean;
  className?: string;
  icon?: boolean;
  stateText?: string;
  disabled?: boolean;
  buttonContent?: string;
}

const FirmFactCard: React.FC<FirmFactCardProps> = ({ variant, className, stateText, disabled, icon, buttonContent }) => {
  // console.log("🚀 ~ className:", className)
  // console.log("🚀 ~ variant:", variant)
  return (
    <div className={`${styles[variant]} ${className}`}>
      <Button variant={variant === "border" ? "icon" : variant} icon={icon} disabled={disabled}>
        {buttonContent}
      </Button>
    </div>
  );
};

export default FirmFactCard;