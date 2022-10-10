import React, { useState } from 'react';
import { Button, FormBlock, Icon } from "../components";

export const Login = () => {

  const [values, setValues] = useState({ user: '', email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleShowPassword = () => {
    setShowPassword(state => !state);
  }

  const handleRegister = () => {
    setIsRegister(state => !state);
  }


  return(
    <div className="w-full h-screen">
      <div className="container">
        <div className="columns-2 w-screen">
          <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="block">
              <h2 className="font-bold text-black text-left text-4xl mb-2">Welcome Back!</h2>
              <h5 className="text-gray-400 mb-8">Let's build something great</h5>
              {isRegister && <FormBlock 
                type="text" 
                name="user" 
                value={values.user} 
                className="shadow appearance-none border rounded w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-violet-600 active:border-violet-700" handleChange={handleChanges} />
              }
              <FormBlock 
                type="email" 
                name="email" 
                value={values.email}
                className="shadow appearance-none border rounded w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-violet-600 active:border-violet-700" handleChange={handleChanges} 
              />
              <FormBlock 
                type={showPassword ? 'text' : 'password'} 
                name="password" 
                value={values.password}
                className="shadow appearance-none border rounded w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-violet-600 active:border-violet-700" handleChange={handleChanges}
                >
                  <Icon icon={'EyeIcon'} className="absolute right-2 top-9 h-6 w-6 text-gray-700 hover:text-violet-600 active:text-violet-700" handleClick={handleShowPassword} />
              </FormBlock>
              <Button type="submit" className="border rounded py-3 px-3 bg-violet-600 hover:bg-violet-500 text-white w-full">{isRegister ? 'Create account' : 'Log in'}</Button>
              <p>
                {isRegister ? 'Not register yet?' : 'Already have an account?'}
                <Button type="button" handleClick={handleRegister} className="py-3">
                  <span className="text-violet-500 hover:text-violet-700 active:text-violet-700">
                    {isRegister ? 'Sign in' : 'Create Account'}
                  </span>
                </Button>
              </p>
            </div>
          </div>
          <div className="w-full h-screen bg-violet-900 block"></div>
        </div>
      </div>
    </div>
  )
}