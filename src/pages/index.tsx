import AuthForm from '@/components/AuthForm/AuthForm';
import PaymentCheck from '@/components/PaymentCheck/PaymentCheck';
import SurveyForm from '@/components/SurveyForm/SurveyForm';
import { UserDataContext, UserDataProps, defaultUserData } from '@/components/userData';
import React, { useState } from 'react';


function Home() {
  var [userData, setUserData] = useState<UserDataProps>(defaultUserData)
  
  return (
    <UserDataContext.Provider value={{userData, setUserData}}>
      {(() => {
        // if (userData.surveyEnded())
        return <PaymentCheck />
        
        
        return userData.authed
          ? <SurveyForm />
          : <AuthForm />
      })()}
    </UserDataContext.Provider>
  )
}

export default Home;
