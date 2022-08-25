import React from 'react'
import {Outlet} from "react-router-dom"
import Login from '../Login';
export default function Home({isAuth,signIn}) {
  const auth=isAuth;
  return (
    <div className='home'>
      <div className="homeTop px-3 d-flex flex-column align-items-start justify-content-xl-center justify-content-start py-xl-0 py-4">
      <span class="badge p-2 mb-2">Hello travelers</span>
      <h1 className='homeText'>Discover your life</h1>
      <h1 className='homeText'>Travel where you want</h1>
      <h5 className='homeTextDesc'>Surdikmi?</h5>
      </div>
      {auth?<Outlet/> :<Login signIn={signIn}/>}
    </div>
  )
}
