import styles from '@/styles/base/svg/AnswerCheckbox.module.scss'
import { HTMLAttributes,  } from 'react';
import CheckMark from './CheckMark';

interface AnswerCheckboxProps extends HTMLAttributes<HTMLDivElement> {
    checked: boolean,
}

var AnswerCheckbox = ({
    checked,
    ...props
}: AnswerCheckboxProps) => {
    return (<div
        style={{
            width: 'fit-content',
            height: 'fit-content',
            position: 'relative',
        }}
        {...props}
    >
        
        <CheckMark
            side={20}
            fill="white"
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-100%, -50%)',
                cursor: 'pointer',
                zIndex: '10',
                pointerEvents: 'none'
            }}
        />
        
        <input
            checked={checked}
            readOnly={true}
            
            className={
                styles.answerCheckbox +
                (checked ? " " + styles.answerCheckbox__checked: '')}
        />
        
    </div>)
}
export default AnswerCheckbox;
