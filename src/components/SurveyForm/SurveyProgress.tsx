import { HTMLAttributes } from "react";


interface SurveyProgress extends HTMLAttributes<HTMLDivElement> {
    questionsNumber: number,
    currentQuestionsIndex?: number,
}

var SurveyProgress = ({
    questionsNumber,
    currentQuestionsIndex=0,
    ...props
}: SurveyProgress) => {
    return (
        <div
            {...props}
        >
            <div
                style={{
                    width: `${100 * (currentQuestionsIndex / questionsNumber)}%`,
                    height: "20px",
                    transition: 'width 1s',
                    backgroundColor: '#FA4729'
                }}
            ></div>
        </div>
    )

}
export default SurveyProgress;
