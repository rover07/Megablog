import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import authService from '../assets/appwrite/auth'
import {login} from '../store/authSlice'
import {Button,Logo,Input} from './index'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
            const userData=await authService.getCurrentUser()
            if(userData) dispatch(login(userData));
            navigate('/')
            } 
            
        } catch (error) {
            setError(error.message)

        }

    }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
           <span className='inline-block w-full max-w-[100px]'>
             <Logo width="100%"/></span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight '> Sign up to create4 account 

            </h2>
            <p className='mt-2 text-center text-base text-black/60'>  
            Already have and account?&nbsp;
            <Link 
            to='/login'
            className='font-medium text-primary transition-all duration-200 hover:underline'
            >
                Sign IN 
            
            </Link>

            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(create)}> 
            <div className='space-y-5'> 
                <Input
                lable='full Name:'
                placeholder="enter your full Name" 
                { ...register('name',{
                    required:true
                })}

                
                />

                <Input
                label="email "
                placeholder='enter your email here'
                type='email'
                {
                    ...register('email',{ required:true ,
                        validate:{
                            matchPatern:(value)=>/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value) || "Email adress must be valid address",
                        }
                    })
                }
                
                /> 

                <Input 
                label="password"
                placeholder="enter your password "
                type='password'
                { ...register('password',{
                    required:true
                    
                })
               }
                />
                <Button type='submit'
                className="w-full">Create account</Button>

            </div>

        </form>
            

        </div>
    )
}


export default Signup;