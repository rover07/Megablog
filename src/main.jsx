import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import{AuthLayout ,Login } from './components/index'

import Post from './pages/Post.jsx'
import AddPost from './pages/AddPost.jsx'
import AllPosts from './pages/AllPosts.jsx'
import EditPost from './pages/EditPost.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'



const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children :[
      {
        path:'/',
        element:<Home/>
        
      }
      ,
      {
        path:'/add-post',
        element:(
          <AuthLayout authentication>

          {" "}
          <AddPost/>
          </AuthLayout>
        )

      },
      {
        path:'/edit-post',
        element:(
          <AuthLayout authentication>
            {" "}
            <EditPost/>
          </AuthLayout>
        )

      },

     {
        path:'/post/:slug',
        element:(
          <Post/>
        )

      },

      {
        path:'/login',
        element:(
          <AuthLayout authentication={false}>

            <Login/>

          </AuthLayout>
        )

      },
      {
        path:'/Signup',
        element:(
          <AuthLayout authentication={false}>

            <Signup/>
          </AuthLayout>
        )

      },
      {
        path:'/all-posts',
        element:(
          <AuthLayout authentication>

            <AllPosts/>
          </AuthLayout>
        )

      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>
)
