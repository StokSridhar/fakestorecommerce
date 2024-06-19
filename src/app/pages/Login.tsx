'use client'
import React, { ChangeEvent, MouseEvent, useState } from 'react'
import Input from '../component/Input'
import Buttons from '../component/Buttons'
import Checkbox from '../component/Checkbox'

export const Login = () => {
    const [firstName, setFirstname] = useState<string>("");
    const [lastName, setLastname] = useState<string>("");
    const [error, setError] = useState<boolean>(false)
    const handleFirstnameChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFirstname(e.target.value)
    }
    const handleLastnameChange = (e:ChangeEvent<HTMLInputElement>) => {
        setLastname(e.target.value)
    }
    const handlebtnClick = (e:MouseEvent<HTMLButtonElement>) => {  
        alert(JSON.stringify(firstName +lastName))
        console.log("Button Clicked")
    }
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <img src="https://supabase.com/dashboard/img/supabase-logo.svg"  className="mx-auto h-20 w-auto"/>
        <form className="space-y-6" action="#" method="POST"> 
        <Input label="User Name" name="First Name" type="text" onchange={handleFirstnameChange} error={false}/>
        <Input label="Password" name="Last Name" type="password" onchange={handleLastnameChange} error={false}/> 
        <Checkbox label='checkbox' checked={false}/>
        <Buttons type="submit" name="Submit" onClick={handlebtnClick}/> 
        </form>
    </div> 
  )
}
