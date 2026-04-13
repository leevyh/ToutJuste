import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export default function Button({ children, variant = 'primary', fullWidth, className = '', ...props }: ButtonProps) {
  const baseClass = `${styles.btn} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''} ${className}`;
  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}
