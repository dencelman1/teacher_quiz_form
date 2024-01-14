import AnswerCheckbox from "@/base/svg/AnswerCheckbox";
import { useUserData } from "@/components/userData";
import { useMemo } from "react";

import styles from '@/styles/components/SurveyForm/SurveyAnswerOption/SurveyAnswerOption.module.scss'

interface SurveyAnswerOptionProps {
    option: string,
    index: number,
}


var SurveyAnswerOption = ({
    option,
    index,
}: SurveyAnswerOptionProps) => {
    var {userData, setUserData} = useUserData()

    var isChecked = useMemo(() =>
        index === userData.currentAnswerIndex,
        [index, () => userData.currentAnswerIndex])

    var className = useMemo(() => (
        `${styles.surveyAnswerOption} ` +
        (isChecked ? styles.surveyAnswerOption__checked: "")
    ), [isChecked])

    return (
        <div
            className={className}
            onClick={() => {
                setUserData(p => ({...p, currentAnswerIndex: index}))
            }}
        >
            <AnswerCheckbox
                
                checked={isChecked}
            />
            
            <div
                style={{
                    marginLeft:  isChecked ? "40px !important": "0"
                }}
            >
                {option}
            </div>
            
        </div>
    )
}

export default SurveyAnswerOption;
