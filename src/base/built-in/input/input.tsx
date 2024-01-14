import React, { InputHTMLAttributes, KeyboardEvent } from 'react';
import styles from '@/styles/base/built-in/input/input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    onMouseDown?: (event: any) => void | null,
}


export default function Input({
    className="",
    ...props
}: InputProps) {
    

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        const { key, currentTarget, } = event
        const { onKeyDown } = props
        
        if (onKeyDown)
            onKeyDown(event)

        if (key === "Escape") {
            currentTarget.blur()
        }
    }

    const inputProps = {
        ...props,
        onKeyDown,
        spellCheck: false,
    }

    return (
        <input
            className={styles.standartInput}
            {...inputProps}
        />
    )
}

