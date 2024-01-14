

import React, { ReactNode, useEffect, useRef, useState } from "react"
import styles from '@/styles/base/built-in/input/form-input/form-input.module.scss'
import Input, { InputProps } from "../input";



interface FormInputProps extends InputProps {
    label: ReactNode | string,
    value: string,
    style?: object,
    className?: string,
}

export default function FormInput({
    label,
    style={},
    className="",
    value='',
    ...props
}: FormInputProps) {
    const [focused, setFocused] = useState(false)
    const [filled, setFilled] = useState(value !== '')
    
    const labelElement =
        typeof label === "string"
        ? (
            <label>
                {label}
            </label>
        )
        : label

    return (
        <div
            className={`
                ${styles.formInput}
                ${focused ? styles.formInput__focused: ""}
                ${filled || focused ? styles.formInput__filled: " "}
            `}
            style={style}
        >
            {labelElement}

            <Input
                {...props}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(event) => {
                    if (props.onChange)
                        props.onChange(event)

                    const {value} = event.target
                    
                    setFilled(value !== "")
                }}
                className={className}
                defaultValue={value}
                
            />
        </div>
    );
}