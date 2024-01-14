import { useUserData } from '@/components/userData'
import styles from '@/styles/components/SurveyForm/SurveyForm.module.scss'

var SurveyInfo = () => {
    var {userData, setUserData} = useUserData()

    return (
        <div className={styles.surveyInfo}>
            <div
                className={styles.timeCounter}
            >
                <p>{userData.timeLeft}</p>
                <p>sec</p>
            </div>

            <div className={styles.surveyInfo__description}>
                <p>Quiz</p>
                <p>Time start</p>
            </div>
        </div>
    )
}
export default SurveyInfo;
