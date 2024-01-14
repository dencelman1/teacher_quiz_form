import { Button, FormInput, Input } from "@/base/built-in";
import { useUserData } from "../userData";
import styles from '@/styles/components/AuthForm/AuthForm.module.scss'
import { FormEventHandler, useEffect, useRef, useState } from "react";
import LoadingBar from "@/base/svg/LoadingBar";

export var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

function AuthForm() {
    var {userData, setUserData} = useUserData()
    var [loading, setLoading] = useState<boolean>(true)
    var formRef = useRef<HTMLFormElement>(null)

    var onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault();
      event.stopPropagation();
      return false
    }

    var getEmailInput = () => formRef.current?.querySelector("input") as HTMLInputElement
    
    var onStartClick = () => {
      var input = getEmailInput()
      
      if (!userData.email || !emailRegex.test(input?.value || ""))
        return input?.focus()

      setLoading(prev => {
        setTimeout(() => {
          setUserData(p => ({...p, authed: true}))
        }, 2000)

        return true
      })

    }

    useEffect(() => {
      var savedEmail = localStorage.getItem("email") as string
      if (savedEmail) {
        
        setUserData(p => {
          setTimeout(() => setLoading(false), 1)  
          return {...p, email: savedEmail}
        });
      }
        
    }, [])

    return (
      <div
        className={styles.authBlock}
      >
        <form
          className={styles.authForm}
          ref={formRef}
          onSubmit={onSubmit}
        >
          {
            loading
            ? (
              <LoadingBar
                
              />
            )
            : <>
              <FormInput
                label='E-mail'
                value={userData.email}
                onClick={(e) => e.currentTarget.focus()}
                onChange={(event) => {
                  var newValue = event.currentTarget.value
                  setUserData(p => ({...p, email: newValue}))
                  localStorage.setItem("email", newValue)

                }}
              />
              <Button
                style={{
                  marginTop: '10px',
                  width: "100%",
                  color: 'white',
                  padding: '10px 0'
                }}
                onClick={onStartClick}
              >
                Start
              </Button>
            </>}
        </form>
      </div>
    )
}

export default AuthForm;
