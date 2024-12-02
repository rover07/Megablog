import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch} from 'react-redux' 
import authService from './assets/appwrite/auth'
import {Header,Footer} from './components/index'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    }
    )
    .finally(()=>{setLoading(false)})
  },[])

  return !loading?<>
  <Header/>
  <main>
    {/* <Outlet/> */}
  </main>
  <Footer/>
  </>:<></>;
}

export default App
