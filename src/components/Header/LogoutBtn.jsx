
import React from 'react'
import {logout} from '../../store/authSlice'
import {useDispatch} from 'react-redux'
import authService from '../../assets/appwrite/auth'

function LogoutBtn(){

    const dispatch=useDispatch()
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
        
    }
    return (
        <button onClick={logoutHandler}>
            Logout
        </button>
    )
}


export default LogoutBtn;