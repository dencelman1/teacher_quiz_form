import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from '@/styles/base/built-in/button/button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
}

export default function Button({
    className='',
    children,
    ...props
}: ButtonProps) {
    
    return <button
        className={`${styles.standartButton} ${className}`}
        {...props}
    >
        {children}
    </button>
}
