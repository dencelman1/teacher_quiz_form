import React, { useContext } from "react"

interface Question {
    questionText: string,
    answerOptions: string[],
}

interface UserDataProps {
    email: string,
    authed: boolean,

    timeLeft: number,
    currentAnswerIndex: number,
    
    questions: Question[],
    answers: number[],

    currentQuestionsIndex: () => number,
    currentQuestion: () => Question | undefined,

    surveyEnded: () => boolean,
}

// TODO: clear (get questions from server by link query)
var defaultQuestions = [
    {
        questionText: 'QUESTION_TEXT_1',
        answerOptions: [
            "Option1",
            "Unical second option",
            'Option N3',
            "OPTION_4"
        ]
    },
    {
        questionText: 'QUESTION_TEXT_2',
        answerOptions: [
            "Option1",
            "Unical second option",
            'Option N3',
            "OPTION_4"
        ]
    },
    {
        questionText: 'QUESTION_TEXT_3',
        answerOptions: [
            "Option1",
            "Unical second option",
            'Option N3',
            "OPTION_4"
        ]
    },
    {
        questionText: 'QUESTION_TEXT_4',
        answerOptions: [
            "Option1",
            "Unical second option",
            'Option N3',
            "OPTION_4"
        ]
    },
]


var defaultUserData = {
    authed: false,
    email: "",

    timeLeft: 0,

    currentAnswerIndex: 0,

    questions: [
        // TODO: clear
        ...defaultQuestions,
    ],
    answers: [],

    currentQuestionsIndex() {
        return this.answers.length
    },
    currentQuestion() {
        return this.questions[this.currentQuestionsIndex()]
    },

    surveyEnded() {
        return this.answers.length >= this.questions.length
    }
}



type UserDataStateType = {
    userData: UserDataProps,
    setUserData: React.Dispatch<React.SetStateAction<UserDataProps>>
}


var UserDataContext = React.createContext<UserDataStateType>({
    userData: defaultUserData,
    setUserData: () => {}
})


var useUserData = (): UserDataStateType => {
    var ctx = useContext(UserDataContext);
    
    return ctx
}

export type {
    UserDataProps,
    Question,
}

export {
    defaultUserData,
    useUserData,
    UserDataContext
}

// TODO:
// 1 оплата
// 2 результаты + ссылки на другие тесты
