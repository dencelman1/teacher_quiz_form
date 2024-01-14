import styles from '@/styles/components/SurveyForm/SurveyForm.module.scss'
import { useEffect, useMemo, useReducer } from 'react';
import { useUserData } from '../userData';
import SurveyProgress from './SurveyProgress';
import SurveyAnswerOption from './SurveyAnswerOption/SurveyAnswerOptions';


var SurveyForm = () => {
    var {userData, setUserData} = useUserData()
    
    useEffect(() => {
        var onSecondCatched = () => {
            setUserData(p => ({...p, timeLeft: p.timeLeft + 1}))
        }
        var intervalId = setInterval(onSecondCatched, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    var currentQuestion = useMemo(() => {
        return userData.currentQuestion() || {
            questionText: "",
            answerOptions: [],
        }
    }, [userData])

    var {
        questions,
        currentAnswerIndex,
    } = userData

    var currentQuestionsIndex = userData.currentQuestionsIndex()
    
    var isLastQuestion = useMemo(() => {
        return userData.currentQuestionsIndex() >= userData.questions.length - 1
    }, [() => userData.answers, () => userData.questions])

    var isFirstQuestion = useMemo(() => {
        return userData.currentQuestionsIndex() === 0
    }, [() => userData.answers])

    return (
        <div className={styles.surveyBlock}>
          <div className={styles.questionBlock}>

            <h1 className={styles.surveyTypeTitle}>QUIZ</h1>
            <p className={styles.surveyDescription}>Fill out this Trivia quiz for fun!</p>

            <div className={styles.progressBar}>
                <div
                    style={{
                        fontSize: '25px',
                        textAlign: 'right',
                    }}
                >
                    Question {currentQuestionsIndex + 1} / {questions.length}
                </div>
                
                <SurveyProgress
                    questionsNumber={questions.length}
                    currentQuestionsIndex={currentQuestionsIndex}
                    style={{
                        width: '100%',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        backgroundColor: '#E9E9E9',
                    }}
                />
            </div>
            <h1 className={styles.questionText}>
                {currentQuestion?.questionText}
            </h1>
            <div>
                {
                    currentQuestion.answerOptions
                    .map((o: string, index: number) => (
                        <SurveyAnswerOption
                            option={o}
                            index={index}
                        />
                    ))
                }
            </div>
            <div
                className={styles.paginationBlock}
            >
                {   
                    <button
                        onClick={() => {
                            setUserData(prev => {
                                if (isFirstQuestion)
                                    return {...prev, authed: false}
                                return {
                                    ...prev,
                                    answers: prev.answers.slice(0, -1),
                                    currentAnswerIndex: 0,
                                }
                            })
                        }}
                    >
                        <span
                            className={styles.arrowIcon__left + " "+ styles.arrowIcon}
                        >
                            {isFirstQuestion ? "✖": "⮜"}
                        </span>
                        {isFirstQuestion ? "Change email": "Last question"}
                    </button>
                }
                <button
                    onClick={() => {
                        if (isLastQuestion) {
                            // TODO: make here to payment
                            return alert(JSON.stringify(
                                [...userData.answers, userData.currentAnswerIndex]
                                .map((e, index) => {
                                    return userData.questions[index].answerOptions[e]
                                }),
                                null, 4))
                        }

                        setUserData(prev => {
                            return {
                                ...prev,
                                answers: [...prev.answers, prev.currentAnswerIndex],
                                currentAnswerIndex: 0,
                            }
                        })
                    }}
                >
                    {
                        isLastQuestion
                        ? "Submit"
                        : "Next question"
                        
                    }
                    <span
                        className={styles.arrowIcon__right + " "+ styles.arrowIcon}
                    >
                        {isLastQuestion ? "👍": "➤"}
                    </span>
                </button>
            </div>
          </div>
        
        </div>
    )
}

export default SurveyForm;
