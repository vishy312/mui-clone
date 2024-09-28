import React from 'react';
import './button.css';
import { Icon } from '../icons/Icon';

interface ButtonProp {
  variant?: 'text' | 'contained' | 'outlined';
  buttonText: string;
  isDisabled?: boolean;
  href?: string;
  color?: 'primary' | 'secondary' | 'success' | 'error';
  size?: 'small' | 'medium' | 'large';
  startIcon?: string;
  endIcon?: string;
  onClick?: () => void
}

export const Button = (
  {
    variant = 'contained',
    buttonText,
    isDisabled = false,
    href = '#',
    color = 'primary',
    size = 'medium',
    startIcon,
    endIcon,
    onClick,
    ...props
  }: ButtonProp,
  ref: any,
) => {
  return (
    <button
      className={`${variant} ${color} ${size} ${isDisabled ? 'disabled' : ''}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {startIcon && <Icon icon={startIcon}/>}
      {buttonText}
      {endIcon && <Icon icon={endIcon}/>}
    </button>
  );
};
